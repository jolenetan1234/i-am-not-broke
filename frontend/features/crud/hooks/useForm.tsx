import React from "react";
import { NewExpenditure } from "../types/expenditure";

// hooks
import { useRouter } from "next/navigation";

// api
import crudApi from "../api/crudApi";

const REDIRECT_PATH = process.env.REACT_APP_HOME_URL || "/home";

const useForm = (
    setData: React.Dispatch<React.SetStateAction<NewExpenditure>>,
    data: NewExpenditure,
    userId: string,
    exptId: string,
    isEdit: boolean,
    handleUpdate: () => void,
    handleEditClose: () => void,
    ) => {
    console.log("useForm");

    const router = useRouter();

    // api calls
    const { postExpt, putExpt } = crudApi(userId);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data.transaction_type === "expenditure") {
            data.amount = -Math.abs(data.amount);
        } else {
            data.amount = Math.abs(data.amount);
        };

        console.log("Hello, data to be sent", data);

        const postData = async () => {
            await postExpt(data);

            // reset `data` to initial state
            setData({
            title: "",
            date: "",
            amount: 0,
            category: "others",
            description: "",
            transaction_type: "expenditure",
            user_id: +userId,
            });

            router.push(REDIRECT_PATH);
        };

        const putData = async () => {
            await putExpt(exptId, data);

            // reset `data` to initial state
            setData({
                title: "",
                date: "",
                amount: 0,
                category: "others",
                description: "",
                transaction_type: "expenditure",
                user_id: +userId,
            });

            handleUpdate();

            handleEditClose();
        };

        if (isEdit) {
            putData();
        } else {
            postData();
        };
    };

    return {
        handleChange,
        handleSubmit,
    };
};

export default useForm;