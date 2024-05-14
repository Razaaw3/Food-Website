import User from "@/Models/User";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const users = await User.find();

    return NextResponse.json(
      {
        success: true,
        message: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while fetching users : ", error);
    return NextResponse.json({ success: false, message: 'Error fetching users' },{ status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const userData = await request.json();

    // Validate user data
    if (!userData.name || !userData.email || !userData.password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and password are required.',
        },
        { status: 400 }
      );
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: userData.email });
    console.log(existingUser)
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User with this email already exists.',
        },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await User.create(userData);

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error while creating user:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { id } = await request.json();

    if (typeof id !== 'string') {
      return NextResponse.json({
        message: 'Invalid _id'
      },{status:400});
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser)
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: "User deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while deleting user : ", error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error deleting user',
      },
      { status: 500 }
    );
  }
}
