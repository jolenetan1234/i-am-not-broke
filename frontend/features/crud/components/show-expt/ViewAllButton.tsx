import Link from "next/link";

const ViewAllButton = () => {
  return (
    <div className="ViewAllButton">
      <div className="my-4">
        <Link
        href="/expenditure"
        className="view-all-button">
          View all transactions
        </Link>
      </div>
    </div>
  );
};

export default ViewAllButton;