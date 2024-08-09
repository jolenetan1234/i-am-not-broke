import { useState } from "react";

const useCreateButton = () => {
    const [createFormOpen, setCreateFormOpen] = useState(false);

    const handleCreateOpen = () => {
        console.log("handleCreateOpen");
        setCreateFormOpen(true);
    };

    const handleCreateClose = () => {
        setCreateFormOpen(false);
    };

    return {
        createFormOpen,
        setCreateFormOpen,
        handleCreateOpen,
        handleCreateClose,
    };
};

export default useCreateButton;