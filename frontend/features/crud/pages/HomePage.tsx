import Header from "@/components/Header";
import ExpenditureHeader from "@/features/crud/components/show-expt/ExpenditureHeader";
import ShowExpenditures from "@/features/crud/components/show-expt/ShowExpenditures";
import ViewAllButton from "@/features/crud/components/show-expt/ViewAllButton";

const HomePage = () => {

  return (
    <div className="HomePage">
      {/* <div className="flex-grow"> */}
        <Header hasBack={false} />
        <ExpenditureHeader isHome/>
        <ShowExpenditures isHome />
        {/* <div className="m-auto max-w-lg my-10 px-6"> */}
          <ViewAllButton />
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;