const EditButton = ({ id, handleEdit }) => {
  return (
    <div className="EditButton">
      <button 
      onClick={() => (
        handleEdit(id)
      )}
      className="edit-button">
        Edit
      </button>
    </div>
  );
};

export default EditButton;