"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateExpenditureForm from "@/features/crud/pages/CreateExpenditureForm";

const REDIRECT_PATH = process.env.REACT_APP_LOGIN_URL || "/";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push(REDIRECT_PATH);
    };
  });
  
  return (
    <CreateExpenditureForm />
  );
};

export default page;