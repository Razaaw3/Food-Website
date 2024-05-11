"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("28f20ce4-af50-4a81-ba5f-8fa8486ede3d");
  }, []);

  return null;
};
