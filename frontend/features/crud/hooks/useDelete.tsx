import { Dispatch, SetStateAction } from "react";
import crudApi from "../api/crudApi";

const useDelete = (userId: string, del: boolean, setDeleteOpen: Dispatch<SetStateAction<boolean>>, setExptId: Dispatch<SetStateAction<string>>, setDel: Dispatch<SetStateAction<boolean>>) => {
    const { deleteExpt } = crudApi(userId);

    const handleDelete = (exptId: string) => {
        setDeleteOpen(true);
        setExptId(exptId);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
        setExptId("");
    };

    const handleDeleteConfirm = async (exptId: string) => {
        const res = await deleteExpt(exptId);
        if (res) {
            setDel(!del);
            handleDeleteClose();
        };
    };

    return {
        handleDelete,
        handleDeleteClose,
        handleDeleteConfirm,
    };
};

export default useDelete;