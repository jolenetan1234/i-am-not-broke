import ExpenditureForm from "../ExpenditureForm";

const EditForm = ({ id, handleUpdate, handleClose }) => {

  return (
    <div className="EditForm">
        <div 
          className="absolute inset-0 flex justify-center items-center"
          >
            <div className="shadow-lg border bg-white dark:bg-zinc-900 py-4">
              <ExpenditureForm isEdit id={id} handleUpdate={handleUpdate} handleClose={handleClose} /> 
            </div>
          </div>
    </div>
  );
};

export default EditForm;