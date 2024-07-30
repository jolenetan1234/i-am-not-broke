import { useState } from "react";

const useSignupState = () => {
    const [signupOpen, setSignupOpen] = useState(false);

    const handleSignupOpen = () => {
        setSignupOpen(true);
    };

    const handleSignupClose = () => {
        setSignupOpen(false);
    };

    return {
        signupOpen,
        handleSignupOpen,
        handleSignupClose,
    };
};

export default useSignupState;