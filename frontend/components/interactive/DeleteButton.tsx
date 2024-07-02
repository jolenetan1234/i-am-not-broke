import { useState } from "react";

const DeleteButton = ({ id, handleDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="DeleteButton">
      <button 
      onClick={() => (
        handleDelete(id)
      )}
      className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;