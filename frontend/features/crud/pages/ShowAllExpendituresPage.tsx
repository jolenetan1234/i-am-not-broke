import Header from "@/components/Header.tsx";
import ExpenditureHeader from "@/features/crud/components/show-expt/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/show-expt/ShowExpenditures";

const ShowAllExpendituresPage = () => {
  return (
    <div className="ShowAllExpendituresPage">
        <Header />
        <ExpenditureHeader />
        <ShowExpenditures />
    </div>
  );
};

export default ShowAllExpendituresPage;