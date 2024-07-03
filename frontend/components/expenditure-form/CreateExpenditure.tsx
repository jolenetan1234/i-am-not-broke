"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewExpenditure } from "@/types/expenditure";
import axios from "axios";
import SubmitButton from "./SubmitButton";

const CreateExpenditure = ({ isEdit = false, id = null, handleUpdate, handleClose }) => {
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
    transaction_type: "expenditure",
  });

  const [categories, setCategories] = useState(expenditureCategories);

  // IF `isEdit`, FETCH EXISTING ENTRY
  if (isEdit) {
    useEffect(() => {
      // const fetchData = await axios.get(`http://localhost:8000/api/expt/`)
      console.log(`fetching data for id ${id}`);

      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/expt/${id}`);
          console.log(`Successfully fetched data for id ${id}`, res.data[0]);

          setData({
            title: res.data[0].title,
            date: res.data[0].date,
            amount: res.data[0].amount,
            category: res.data[0].category,
            description: res.data[0].description,
            transaction_type: res.data[0].transaction_type,
          });
          
        } catch (err) {
          console.log(`Failed to fetch data for id ${id}`, err);
        }; 
      };

    fetchData();

    }, []);
  };

  // handlers
  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  const handleTransactionType = (e) => {
    data.transaction_type = e.target.value;
    // setTransactionType(e.target.value);
    setCategories(e.target.value === "expenditure" ? expenditureCategories : earningCategories);
    console.log(`transaction_type: ${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.transaction_type === "expenditure") {
      data.amount = -Math.abs(data.amount);
    };

    console.log("Data to be sent:", data);

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
          transaction_type: "expenditure",
        });

        console.log("Successfully created expenditure", res);

        router.push("/");

      } catch (err) {
        console.log(err);
      };
    };

    const putData = async () => {
      try {
        const res = await axios.put(`http://localhost:8000/api/expt/${id}`, data);
        console.log(`Successfully updated id ${id}`, res);
      } catch (err) {
        console.log(`Failed to update id ${id}`, err);
      };
    };

    if (isEdit) {
      putData();
    } else {
      postData();
    };
  };

  return (
    <div className={ isEdit ? ("EditExpenditure border bg-white dark:bg-zinc-900") : ("CreateExpenditure")}>
      
      <div className="w-4/5 m-auto">
      {/* form */}
      <form 
      className="form" 
      onSubmit={(e) => {
        handleSubmit(e);
        handleUpdate();
        handleClose();
      }}>
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
          value={data.transaction_type}
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
          value={data.title}
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
          value={data.date}
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
          {...(isEdit ? {value:Math.abs(data.amount)} : {})}
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
          value={data.description}
          placeholder="It was yummy"
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
          value={data.category}
          onChange={handleChange}
          required
          className="input-style"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
          
        <SubmitButton isEdit={isEdit}/>

      </form>
      </div>
    </div>
  );
};

export default CreateExpenditure;