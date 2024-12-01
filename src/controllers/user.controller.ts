import { Request, Response } from 'express';
import Grocery, { IGrocery } from '../models/grocery.model';
import Order, { IOrder } from '../models/order.model';

// View available groceries
export const getAvailableGroceries = async (_req: Request, res: Response): Promise<void> => {
  try {
    const groceries: IGrocery[] = await Grocery.find({ stock: { $gt: 0 } });
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Book groceries
export const bookGroceries = async (req: Request, res: Response): Promise<void> => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items)) {
      res.status(400).json({ message: 'Invalid items format' });
      return; // Exit the function after sending a response
    }

    let totalPrice = 0;

    for (const item of items) {
      const grocery = await Grocery.findById(item.groceryId);
      if (!grocery || grocery.stock < item.quantity) {
        res.status(400).json({ message: `Insufficient stock for item: ${grocery?.name || item.groceryId}` });
        return; // Exit the function after sending a response
      }
      grocery.stock -= item.quantity;
      totalPrice += grocery.price * item.quantity;
      await grocery.save();
    }

    const order: IOrder = new Order({ items, totalPrice });
    await order.save();

    res.status(201).json({ orderId: order.id, totalPrice, status: 'success' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
