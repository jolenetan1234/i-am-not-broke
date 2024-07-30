import ExpenditureForm from "../ExpenditureForm";

const EditForm = ({ exptId, handleUpdate, handleEditClose }: { exptId: string, handleUpdate: () => void, handleEditClose: () => void }) => {

  return (
    <div className="EditForm">
        <div 
          className="absolute inset-0 flex justify-center items-center"
          >
            <div className="py-4 px-2 rounded-md shadow-lg border bg-white dark:bg-zinc-950 dark:border-gray-500 dark:shadow-lg">
              <ExpenditureForm isEdit exptId={exptId} handleUpdate={handleUpdate} handleEditClose={handleEditClose} /> 
            </div>
          </div>
    </div>
  );
};

export default EditForm;