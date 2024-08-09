import Header from "@/layouts/Header";
import LoginForm from "../components/LoginForm";
import SignupButton from "@/features/authentication/components/SignupButton";
import SignupForm from "@/features/authentication/components/SignupForm";
import useSignupState from "../hooks/useSignupState";

const AuthPage = () => {

    const { signupOpen, handleSignupOpen, handleSignupClose } = useSignupState();

  return (
    <div className="AuthPage">
        <Header hasLogout={false}>
          <LoginForm />
          <SignupButton onClick={handleSignupOpen}/>
          { signupOpen ? <SignupForm handleSignupClose={handleSignupClose}/> : "" }
        </Header>
    </div>
  );
};

export default AuthPage;