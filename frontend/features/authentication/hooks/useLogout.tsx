import { useRouter } from "next/navigation";

const REDIRECT_PATH = process.env.REACT_APP_LOGIN_URL || "/";

const useLogout = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        router.push(REDIRECT_PATH);
    };

    return {
        handleLogout,
    };
};

export default useLogout;