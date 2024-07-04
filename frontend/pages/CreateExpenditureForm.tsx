import Header from "@/layouts/Header";
import CreateForm from "@/components/expenditure-form/CreateForm"

const CreateExpenditureForm = () => {
  return (
    <div className="CreateExpenditureForm">
      <Header />
      <CreateForm />
    </div>
  );
};

export default CreateExpenditureForm;