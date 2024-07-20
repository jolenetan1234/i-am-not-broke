// expenditure header ("spendings" + `create expenditure` button)

import CreateTransactionButton from "./CreateTransactionButton";

const ExpenditureHeader = ({ isHome = false }) => {
  return (
    <div className="ExpenditureHeader">
        {/* outer, bigger flex box */}
        <div className="flex mb-2 mt-4">

            {/* adjust width of CHILD, not entire outer flexbox */}
            <div className="w-4/5 m-auto">
                
                {/* even inner, smaller flex box */}
                    <div className="flex justify-between">
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

        </div>

    </div>
  );
};

export default ExpenditureHeader;