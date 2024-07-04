// import { useState, useEffect } from "react";
// import { NewExpenditure } from "@/types/expenditure";
import CreateExpenditure from "./CreateExpenditure";
// import SubmitButton from "./SubmitButton";

const EditForm = ({ id, handleUpdate, handleClose }) => {
 
  return (
    <div className="EditForm">
        <div className="absolute inset-0 flex justify-center items-center">
          <CreateExpenditure isEdit id={id} handleUpdate={handleUpdate} handleClose={handleClose} />  
        </div>
    </div>
  );
};

export default EditForm;