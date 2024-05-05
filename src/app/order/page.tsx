import DataOfGrid from "@/components/GridData";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/Options";
import { redirect } from "next/navigation";
import { axiosRequest } from "@/lib/config";

const OrderPage = async() => {
  const session = await getServerSession(options)

  if(!session)
    redirect('/login')

  const {data} = await axiosRequest.get('/order')

  console.log("data.message : ",data.message)

  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Order Page</h1>
      </header>
      <DataOfGrid action='detail' data={data.message} />
    </div>
  );
};

export default OrderPage;
