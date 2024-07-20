import Header from "@/components/Header.tsx";
import ExpenditureHeader from "@/features/crud/components/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/ShowExpenditures";

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