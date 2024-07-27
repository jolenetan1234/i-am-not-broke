import Link from "next/link";

const ViewAllButton = () => {
  return (
    <div className="ViewAllButton">
      <Link
      href="/expenditure"
      className="view-all-button">View all transactions</Link>
    </div>
  );
};

export default ViewAllButton;