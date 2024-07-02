import ExpenditureHeader from "@/components/expenditure-list/ExpenditureHeader";
import ShowExpenditures from "@/components/expenditure-list/ShowExpenditures";

const ShowAllExpendituresPage = () => {
  return (
    <div className="ShowAllExpendituresPage">
        <ExpenditureHeader />
        <ShowExpenditures />
    </div>
  );
};

export default ShowAllExpendituresPage;