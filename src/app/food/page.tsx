'use client'
import React, { useEffect, useState } from "react";
import FoodPageComponent from "@/app/food/FoodPageComponent";
import { axiosRequest } from "@/lib/config";

const FoodPage = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosRequest.get("/product");
        setFoods(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <FoodPageComponent foods={foods} />;
};

export default FoodPage;
