const DeleteButton = ({ exptId, handleDelete }: { exptId: string, handleDelete: (exptId: string) => void }) => {

  return (
    <div className="DeleteButton">
      <button 
      onClick={() => (
        handleDelete(exptId)
      )}
      className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;