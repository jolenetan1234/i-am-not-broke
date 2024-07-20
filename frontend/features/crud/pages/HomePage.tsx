import Header from "@/components/Header";
import ExpenditureHeader from "@/features/crud/components/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/ShowExpenditures";
import ViewAllButton from "@/features/crud/components/ViewAllButton";

const HomePage = () => {

  return (
    <div className="HomePage">
        <Header hasBack={false} />
        <ExpenditureHeader isHome />
        <ShowExpenditures isHome />
        <ViewAllButton />
    </div>
  );
};

export default HomePage;