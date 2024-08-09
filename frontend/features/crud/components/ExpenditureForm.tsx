import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewExpenditure } from "@/features/crud/types/expenditure";
import axios from "axios";
import SubmitButton from "@/components/SubmitButton";
import CloseButton from "@/components/CloseButton";

// hooks
import useFetchAndSetData from "../hooks/useFetchAndSetData";
import useForm from "../hooks/useForm";

// HARD-CODED. REMOVE LATER
const REDIRECT_PATH = "/home";

const ExpenditureForm = ({ isEdit = false, exptId = "", handleUpdate = () => {}, handleEditClose = () => {}}: { isEdit?: boolean, exptId?: string, handleUpdate?: () => void, handleEditClose?: () => void }) => {
  const expenditureCategories = [
    { value: "dining", label: "Dining" },
    { value: "entertainment", label: "Entertainment/Leisure" },
    { value: "shopping", label: "Shopping" },
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

  // set states
  const [userId, setUserId] = useState(localStorage.getItem("userId") ?? "");

  const [data, setData] = useState<NewExpenditure>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    amount: 0,
    category: "others",
    description: "",
    transaction_type: "expenditure",
    user_id: +userId,
  });

  const [categories, setCategories] = useState(expenditureCategories);

  // useEffect
  // such that this happens whenever `data.transaction_type` changes
  useEffect(() => {
    setCategories(data.transaction_type === "expenditure" ? expenditureCategories : earningCategories);
  }, [data.transaction_type]);

  // useEffect
  if (isEdit) {
    // so this only happens on initial render
    useEffect(() => {
      useFetchAndSetData(userId, exptId, setData);
      console.log("inside", data);
    }, []);
  };

  // handlers
  const { handleChange, handleSubmit } = useForm(setData, data, userId, exptId, isEdit, handleUpdate, handleEditClose);

  return (
    <div className="ExpenditureForm">

      <div className="w-4/5 m-auto">

      { isEdit ? <CloseButton onClick={handleEditClose} /> : "" }

      {/* form */}
      <form 
      className="form" 
      onSubmit={(e) => {
        handleSubmit(e);
        // handleUpdate();
        // handleEditClose();
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
          name="transaction_type"
          value={data.transaction_type}
          required
          onChange={handleChange}
          // onChange={handleTransactionType}
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
          
        <SubmitButton
        {...(isEdit ? { text:"Save" } : { text:"Create transaction" })}
        />

      </form>

      </div>
    </div>
  );
};

export default ExpenditureForm;