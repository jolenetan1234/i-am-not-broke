"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ShowAllExpendituresPage from "@/features/crud/pages/ShowAllExpendituresPage";

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
    <ShowAllExpendituresPage />
  );
};

export default page;