import Header from "@/layouts/Header.tsx";
import ExpenditureHeader from "@/features/crud/components/show-expt/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/show-expt/ShowExpenditures";

const ShowAllExpendituresPage = () => {
  return (
    <div className="ShowAllExpendituresPage">
        <Header>
          <ExpenditureHeader />
          <ShowExpenditures />
        </Header>
    </div>
  );
};

export default ShowAllExpendituresPage;