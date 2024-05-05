import mongoose, { Schema } from "mongoose";
import Product, { Products } from "./Product";

export interface Orders extends mongoose.Document {
  totalPrice : number,
  products : {
    product : Schema.Types.ObjectId | Products,
    quantity : number
  }[],
  userId :Schema.Types.ObjectId,
  totalItems : number,
  totalWeight : number
}

const OrderSchema = new mongoose.Schema<Orders>({

  userId : {
    type : Schema.Types.ObjectId,
    ref : 'user',
    required : true,
  },
  products :[{
    product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true }
  }],
  
  totalPrice : {
    type : Number,
    required : true
  },
  totalItems : {
    type : Number,
    required : true
  },
  totalWeight : {
    type : Number,
    required : true
  }

});

export default mongoose.models.Order || mongoose.model<Orders>("Order", OrderSchema);