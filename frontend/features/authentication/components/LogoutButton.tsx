import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
    const { handleLogout } = useLogout();

    return (
        <div className="LogoutButton">
            <div className="flex justify-between mb-2">
                <div />
                <button
                className="block text-sm underline text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default LogoutButton;