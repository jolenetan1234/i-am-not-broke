import React from "react";
import { NewExpenditure } from "../types/expenditure";

const useForm = (
    setData: React.Dispatch<React.SetStateAction<NewExpenditure>>, 
    data: NewExpenditure, 
    setCategories: React.Dispatch<React.SetStateAction<{
        value: string;
        label: string;
    }[]>>,
    expenditureCategories: {
        value: string;
        label: string;
    }[],
    earningCategories: {
        value: string;
        label: string;
    }[],
    ) => {
    console.log("useForm");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    return {
        handleChange,
    }
};

export default useForm;