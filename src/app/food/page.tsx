import React from "react";
import FoodPageComponent from "@/app/food/FoodPageComponent";
import { axiosRequest } from "@/lib/config";

const FoodPage = async () => {
  const { data } = await axiosRequest.get("/product");
  const foods = data.message;

  return <FoodPageComponent foods={foods} />;
};

export default FoodPage;
