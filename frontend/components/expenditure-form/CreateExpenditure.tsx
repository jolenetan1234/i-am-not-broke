"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NewExpenditure } from "@/types/expenditure";
import axios from "axios";
import SubmitButton from "./SubmitButton";

const CreateExpenditure = () => {
  const expenditureCategories = [
    { value: "dining", label: "Dining" },
    { value: "entertainment", label: "Entertainment/Leisure" },
    { value: "shoppping", label: "Shopping" },
    { value: "education", label: "Education" },
    { value: "transport", label: "Transport" },
    { value: "others", label: "Others" },
  ];

  const earningCategories = [
    { value: "wages", label: "Wages" },
    { value: "passive", label: "Investments/Passive" },
    { value: "transfer", label: "Transfer" },
    { value: "business", label: "Business" },
    { value: "others", label: "Others" },
  ];

  // hooks
  const router = useRouter();

  // define states
  const [data, setData] = useState<NewExpenditure>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    amount: 0,
    category: "others",
    description: "",
  });

  const [transactionType, setTransactionType] = useState("expenditure");

  const [categories, setCategories] = useState(expenditureCategories);

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  const handleTransactionType = (e) => {
    setTransactionType(e.target.value);
    setCategories(e.target.value === "expenditure" ? expenditureCategories : earningCategories);
    console.log(`transactionType: ${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (transactionType === "expenditure") {
      data.amount = -data.amount;
    };

    console.log("data", data);

    const postData = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/expt", data);

        // reset `data` to initial state
        setData({
          title: "",
          date: "",
          amount: 0,
          category: "others",
          description: "",
        });

        console.log("Successfully created expenditure", res);

        router.push("/");

      } catch (err) {
        console.log(err);
      };
    };

    postData();
  };

  return (
    <div className="CreateExpenditure">

      <div className="w-4/5 m-auto">
      {/* form */}
      <form className="form" onSubmit={handleSubmit}>
        {/* transaction type */}
        <div className="mb-5">
          <label 
          htmlFor="transactionType" 
          className="input-label-style">
            <span>Transaction type</span> 
            <span className="text-red-500">*</span>
          </label>

          <select 
          id="transactionType"
          required 
          onChange={handleTransactionType}
          className="input-style"
          >
            <option value="expenditure">Expenditure</option>
            <option value="earning">Earning</option>
            </select>
        </div>
        
        {/* other inputs */}
        <div className="mb-5">
          <label 
          htmlFor="title"
          className="input-label-style"
          >
            <span>Title</span> 
            <span className="text-red-500">*</span>
          </label>

          <input
          type="text"
          id="title"
          name="title"
          placeholder="Lunch with Sally"
          required
          onChange={handleChange}
          className="input-style"
          />
        </div>
        
        <div className="mb-5">
          <label 
          htmlFor="date"
          className="input-label-style">
            Date
          </label>

          <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className="input-style"
          />
        </div>
        
        <div className="mb-5">
          <label 
          htmlFor="amount"
          className="input-label-style">
            <span>Amount</span> 
            <span className="text-red-500">*</span>
          </label>

          <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          placeholder="40.25"
          min="0"
          
          required
          onChange={handleChange}
          className="input-style"
          />
        </div>
        
        <div className="mb-5">
          <label 
          htmlFor="description"
          className="input-label-style">
            Description (if any)
          </label>

          <input
          type="text"
          id="description"
          name="description"
          placeholder="It was yummy"
          defaultValue=""
          onChange={handleChange}
          className="input-style"
          />
        </div>

        {/* category input */}
        <div className="mb-5">
          <label 
          htmlFor="Category"
          className="input-label-style">
            Category
          </label>

          <select 
          id="Category" 
          name="category"
          defaultValue="others" 
          required
          className="input-style"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
      
        <SubmitButton />

      </form>
      </div>
    </div>
  );
};

export default CreateExpenditure;