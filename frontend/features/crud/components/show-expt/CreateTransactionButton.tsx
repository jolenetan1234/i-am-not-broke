import Link from "next/link";
 
const CreateTransactionButton = () => {
  return (
    <div className="CreateExptButton">
        <Link
        href="/expenditure/create"
        className="create-transaction-button">Create Transaction
        </Link>
    </div>
  );
};

export default CreateTransactionButton;