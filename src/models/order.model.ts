import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
  items: {
    groceryId: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }[];
  totalPrice: number;
  createdAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    items: [
      {
        groceryId: { type: Schema.Types.ObjectId, ref: 'Grocery', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
