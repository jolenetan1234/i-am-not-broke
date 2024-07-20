import Link from "next/link";

const ViewAllButton = () => {
  return (
    <div className="ViewAllButton">
        <div className="m-auto max-w-lg my-10 px-6">
            <Link
            href="/expenditure"
            className="view-all-button">View all transactions</Link>
        </div>

    </div>
  );
};

export default ViewAllButton;