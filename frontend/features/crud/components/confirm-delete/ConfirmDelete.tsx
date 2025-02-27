import React from "react";

const ConfirmDelete = ({
  id,
  handleDeleteClose,
  handleDeleteConfirm,
}: {
  id: string;
  handleDeleteClose: () => void;
  handleDeleteConfirm: (id: string) => void;
}) => {
  return (
    <div className="ConfirmDelete">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="py-4 px-2 rounded-md shadow-lg border bg-white dark:bg-zinc-950 dark:border-gray-500 dark:shadow-lg">
          <div className="text flex flex-col h-full">
            <div
              className="block text-md font-bold text-gray-900 dark:text-white text-center
                    h-1/3"
            >
              Delete Entry
            </div>

            <div
              className="block text-sm text-gray-900 dark:text-white

                    h-1/3"
            >
              Are you sure you want to delete this entry?
            </div>

            <div
              className="Buttons

                    h-1/3"
            >
              <div className="flex justify-between">
                <button
                  className="shadow rounded-sm px-4 mx-2 text-sm font-medium bg-gray-300 hover:bg-gray-400 dark:bg-gray-400 dark:hover:bg-gray-500 dark:text-white"
                  onClick={handleDeleteClose}
                >
                  Cancel
                </button>

                <button
                  className="shadow-md rounded-sm px-4 mx-2 text-sm font-medium text-gray-100 bg-red-500 hover:bg-red-600 dark:bg-orange-800 dark:hover:bg-orange-700 dark:text-black"
                  onClick={() => handleDeleteConfirm(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
