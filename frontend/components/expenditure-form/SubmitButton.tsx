import React from 'react'

const SubmitButton = () => {
  return (
    <div className="SubmitButton">
        <div className="flex justify-center">
            <button 
            type="submit"
            className="submit-button">
            Create transaction
            </button>
        </div>
    </div>
  );
};

export default SubmitButton;