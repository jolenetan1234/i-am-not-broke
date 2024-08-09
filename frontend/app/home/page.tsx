// home page
"use client";

// hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import useCreateButton from "@/features/crud/hooks/useCreateButton";

// components
import HomePage from "@/features/crud/pages/HomePage"
// import CreateExpenditureForm from "@/features/crud/pages/CreateExpenditureForm";

const REDIRECT_PATH = process.env.REACT_APP_LOGIN_URL || "/";

const page = () => {
  const router = useRouter();
  // const { createFormOpen } = useCreateButton()
  // const createFormOpen = true;

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push(REDIRECT_PATH);
    };
  });

  return (
    // createFormOpen ? 
    // (<CreateExpenditureForm />) :
    // (<HomePage />)
    <HomePage />
  );
};

export default page;