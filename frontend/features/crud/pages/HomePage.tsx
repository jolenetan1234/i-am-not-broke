import { useRouter } from "next/navigation";

// hooks
import { useState, useEffect } from "react";
// import useFetchData from "../hooks/useFetchData";

// components
import Header from "@/layouts/Header";
import ExpenditureHeader from "@/features/crud/components/show-expt/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/show-expt/ShowExpenditures";
import ViewAllButton from "@/features/crud/components/show-expt/ViewAllButton";

const HomePage = () => {

  return (
    <div className="HomePage">
        <Header>
          <ExpenditureHeader isHome/>
          <ShowExpenditures isHome />
            <ViewAllButton />
        </Header>
    </div>
  );
};

export default HomePage;