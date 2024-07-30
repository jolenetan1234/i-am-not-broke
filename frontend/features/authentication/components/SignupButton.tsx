const SignupButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="SignupButton">
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div 
                    className="text font-medium text-md">
                        No account?
                    </div>

                    <button
                    className="block text-sm underline text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    onClick={onClick}
                    >
                        Create one!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupButton;