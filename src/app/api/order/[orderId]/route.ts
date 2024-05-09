import dbConnect from "@/lib/dbConnect";
import Order from "@/Models/Order";
import Product from "@/Models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const userId = request.url.slice(request.url.lastIndexOf('/')+1)
    try {
      await dbConnect();
      const data = await Order.find({userId}).populate('products.product',null,Product).exec(); // Populate the products field with the product details
      return NextResponse.json(
        {
          success: true,
          message: data,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log("Error while fetching products : ", error);
      return NextResponse.json({ success: false, message: 'Error occurred while fetching data' }, { status: 400 });
    }
  }