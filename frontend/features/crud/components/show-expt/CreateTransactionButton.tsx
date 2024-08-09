// import useCreateButton from "../../hooks/useCreateButton";

import Link from "next/link";

 
const CreateTransactionButton = () => {
  // const { handleCreateOpen } = useCreateButton();

  return (
    <div className="CreateExptButton">
        <Link 
        href="/expenditure/create"
        // onClick={handleCreateOpen}
        className="create-transaction-button">Create Transaction
        </Link>
    </div>
  );
};

export default CreateTransactionButton;