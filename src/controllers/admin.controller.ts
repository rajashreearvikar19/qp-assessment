import { Request, Response } from 'express';
import Grocery, { IGrocery } from '../models/grocery.model';

// Add a new grocery
export const addGrocery = async (req: Request, res: Response): Promise<void> => {
  try {
    const groceries: IGrocery[] = req.body;

    if (!Array.isArray(groceries)) {
      res.status(400).json({ message: "Request body must be an array of groceries." });
      return;
    }

    // Insert multiple groceries into the database using insertMany
    const addedGroceries = await Grocery.insertMany(groceries);
    
    res.status(201).json(addedGroceries); // Return the added groceries
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// View all groceries
export const getGroceries = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.params.id) {
      // Search for a single grocery by ID
      const grocery: IGrocery | null = await Grocery.findById(req.params.id);

      if (!grocery) {
        res.status(404).json({ message: 'Grocery not found' });
        return;
      }

      res.status(200).json(grocery); // Send the grocery object if found
    } else {
      // Get all groceries
      const groceries: IGrocery[] = await Grocery.find();
      res.status(200).json(groceries); // Send the list of groceries
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update grocery details
export const updateGrocery = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedGrocery = await Grocery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGrocery) {
      res.status(404).json({ message: 'Grocery not found' });
      return;
    }
    res.status(200).json(updatedGrocery);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Delete a grocery
export const deleteGrocery = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedGrocery = await Grocery.findByIdAndDelete(req.params.id);
    if (!deletedGrocery) {
      res.status(404).json({ message: 'Grocery not found' });
      return;
    }
    res.status(200).json({ message: 'Grocery successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

