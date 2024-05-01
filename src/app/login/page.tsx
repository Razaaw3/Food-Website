import LoginPage from "@/components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "../api/auth/[...nextauth]/Options";

const Login = async() => {
  const session = await getServerSession(options as any);
  console.log(session)
  if (session) redirect("/");
  console.log("Irfan nahi chala")
  return <LoginPage />;
};

export default Login;
