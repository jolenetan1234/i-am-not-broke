import { SetStateAction } from "react";

const useEdit = (setEditOpen: (value: SetStateAction<boolean>) => void, setExptId: (value: SetStateAction<string>) => void, setUpdate: (value: SetStateAction<boolean>) => void, update: boolean) => {
    const handleEdit = (exptId: string) => {
        console.log("handleEdit", exptId);
        setEditOpen(true);
        setExptId(exptId);
    };

    const handleUpdate = () => {
        setUpdate(!update);
    };

    const handleEditClose = () => {
        setExptId("");
        setEditOpen(false);
    };

    return {
        handleEdit,
        handleUpdate,
        handleEditClose,
    };
};

export default useEdit;