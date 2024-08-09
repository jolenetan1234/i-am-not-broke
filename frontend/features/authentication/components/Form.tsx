import React from "react";
import FormInputLabel from "@/components/FormInputLabel";
import FormInputBox from "@/components/FormInputBox";
import SubmitButton from "@/components/SubmitButton";
import CloseButton from "@/components/CloseButton";
import useForm from "../hooks/useForm";
import ErrorMessage from "./ErrorMessage";

const Form = ({ isSignup = false, handleSignupClose = () => {} }: { isSignup?: boolean, handleSignupClose?: () => void }) => {
    // Declare variables outside if-else block so they can be accessed outside of it
    let data, errorMessage, handleChange, handleSubmit;

    if (isSignup) {
        ({ data, errorMessage, handleChange, handleSubmit } = useForm(isSignup, handleSignupClose));
    } else {
        ({ data, errorMessage, handleChange, handleSubmit } = useForm());
    };
    
    console.log("data", data);
    console.log(localStorage);

  return (
    <div className="Form">
        
        {/* <div className="w-4/5 m-auto"> */}

            {/* { isSignup ? <CloseButton onClick={handleSignupClose} />: "" } */}

            <form
            className="form"
            onSubmit={handleSubmit}
            >

                <div className="mb-5">
                    <FormInputLabel 
                    htmlFor="username" 
                    text="Username"
                    required
                    />

                    <FormInputBox
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    required
                    onChange={handleChange}
                    />
                </div>

                { isSignup ? 
                    <div className="mb-5">
                        <FormInputLabel 
                        htmlFor="email" 
                        text="Email"
                        required
                        />
    
                        <FormInputBox
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        required
                        onChange={handleChange}
                        />
                    </div>
                :
                    "" 
                }

                <div className="mb-5">
                    <FormInputLabel
                    htmlFor="password"
                    text="Password"
                    required
                    />

                    <FormInputBox
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    required
                    onChange={handleChange}
                    />
                </div>
                
                { errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : "" }

                <SubmitButton
                {...(isSignup ? { text:"Sign up" } : { text: "Log in" })}
                />
                
            </form>

        {/* </div> */}

    </div>
  );
};

export default Form;