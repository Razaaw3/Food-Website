import SignUp from "@/components/SignUp";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/Options";

const SignUpPage = async() => {
  const session = await getServerSession(options as any);
  console.log(session)
  if (session) redirect("/");
  return <SignUp />;
};

export default SignUpPage;
