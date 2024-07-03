import React from 'react'

const SubmitButton = ({ isEdit = false }) => {
  return (
    <div className="SubmitButton">
        <div className="flex justify-center">
            <button 
            type="submit"
            className="submit-button"
            >
              {isEdit ? (
                "Save"
              ) : (
                "Create transaction"
              )}
            </button>
        </div>
    </div>
  );
};

export default SubmitButton;