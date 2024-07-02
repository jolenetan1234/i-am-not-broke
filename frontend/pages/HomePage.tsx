import ExpenditureHeader from "@/components/expenditure-list/ExpenditureHeader";
import ShowExpenditures from "@/components/expenditure-list/ShowExpenditures";
import ViewAllButton from "@/components/interactive/ViewAllButton";

const HomePage = () => {
  return (
    <div className="HomePage">
        <ExpenditureHeader isHome />
        <ShowExpenditures isHome />
        <ViewAllButton />
    </div>
  );
};

export default HomePage;