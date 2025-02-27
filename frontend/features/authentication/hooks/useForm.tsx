import React from "react";
import { User } from "../types/User";
import { SIGNUP_REQ, LOGIN_REQ } from "../api/authApi";
import axios, { Axios, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useLocalStorage from "./useLocalStorage";

const REDIRECT_PATH = "/home";

const useForm = (isSignup: boolean = false, handleSignupClose: (() => void) = (() => {})) => {

    const router = useRouter();
    
    const [data, setData] = React.useState<User>({
        username: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = React.useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // sets state of `data`
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log("Data to be submitted", data);

        const signupUser = async () => {

            try {
                const res = await axios.post(SIGNUP_REQ, data);
                console.log(`Successfully created user`, res);

                handleSignupClose();

            } catch (err) {
                console.log(`Failed to create user`, err);
            } finally {
                // reset `data` to initial state
                setData({
                    username: "",
                    email: "",
                    password: "",
                });

                setErrorMessage("");
            }
        };

        const loginUser = async () => {
            try {
                const res = await axios.post(LOGIN_REQ, data);
                console.log("Successfully logged in user", res);

                const user = res.data.user;
                const userId = user.id;

                useLocalStorage("userId", userId);

                // store token in localStorage
                console.log("TOKEN", res.data.token);
                useLocalStorage("token", res.data.token);

                // redirect to home
                router.push(REDIRECT_PATH);

            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setErrorMessage(err.response?.data.message);
                    console.log("Failed to log in user", err);
                } else {
                    console.log("Failed to log in user", err);
                };
            } finally {
                // reset `data` to initial state
                setData({
                    username: "",
                    email: "",
                    password: "",
                });
            };
        };

        if (isSignup) {
            signupUser();
        } else {
            loginUser();
        }
    };

    return { 
        data,
        errorMessage,
        handleChange,
        handleSubmit,
    };
};

export default useForm;