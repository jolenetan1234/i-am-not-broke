const EditButton = ({ exptId, handleEdit }: { exptId: string, handleEdit: (exptId: string) => void }) => {
  return (
    <div className="EditButton">
      <button 
      onClick={() => {
        // console.log("hello", exptId);
        handleEdit(exptId);
      }}
      className="edit-button">
        Edit
      </button>
    </div>
  );
};

export default EditButton;