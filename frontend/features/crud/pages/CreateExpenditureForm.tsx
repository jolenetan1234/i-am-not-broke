import Header from "@/components/Header.tsx";
import CreateForm from "@/features/crud/components/create-form/CreateForm"

const CreateExpenditureForm = () => {
  return (
    <div className="CreateExpenditureForm">
      <Header />
      <CreateForm />
    </div>
  );
};

export default CreateExpenditureForm;