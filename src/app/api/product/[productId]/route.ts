import Product from "@/Models/Product";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    try {
      await dbConnect();
  
      const id = request.url.slice(request.url.lastIndexOf('/')+1)
  
      if (typeof id !== 'string') {
        return NextResponse.json({
          message: 'Invalid _id'
        },{status:400});
    }
  
      const product = await Product.findByIdAndDelete({_id:id});
  
      if (!product)
        return NextResponse.json(
          {
            message: "Product not found",
          },
          { status: 404 }
        );
  
      return NextResponse.json(
        {
          message: "Product deleted succefully",
        },
        { status: 200 }
      );
    } catch (error) {
      console.log("Error while creating product : ", error);
    }
}