// expenditure header ("spendings" + `create expenditure` button)

import CreateTransactionButton from "./CreateTransactionButton";

const ExpenditureHeader = ({ isHome = false }) => {
  return (
    <div className="ExpenditureHeader">
        <div className="flex mb-2 justify-between">
            <div className="Transactions">
            {isHome ? (
                <strong className="dark:text-white">Transactions</strong>
            ) : (
                <strong className="dark:text-white">All Transactions</strong>
            )}
            </div>

            <CreateTransactionButton />
        </div>

    </div>
  );
};

export default ExpenditureHeader;