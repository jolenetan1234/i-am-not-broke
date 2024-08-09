import Header from "@/layouts/Header";
import CreateForm from "@/features/crud/components/create-form/CreateForm"

const CreateExpenditureForm = () => {
  return (
    <div className="CreateExpenditureForm">
      <Header>
      <CreateForm />
      </Header>
    </div>
  );
};

export default CreateExpenditureForm;