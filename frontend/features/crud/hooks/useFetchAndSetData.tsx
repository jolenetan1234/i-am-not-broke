import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import crudApi from "../api/crudApi";
import React from "react";
import { NewExpenditure } from "../types/expenditure";

const useFetchAndSetData = (
    userId: string, 
    exptId: string, 
    setData: Dispatch<SetStateAction<NewExpenditure>>,
) => {

    const fetchAndSetData = async () => {
        const { getExptById } = crudApi(userId);
    
        const res = await getExptById(exptId);
    
        if (res && res.data[0]) {
            setData({
                title: res.data[0].title,
                date: res.data[0].date,
                amount: res.data[0].amount,
                category: res.data[0].category,
                description: res.data[0].description,
                transaction_type: res.data[0].transaction_type,
                user_id: res.data[0].user_id,
            });
        };
    };

    fetchAndSetData();
};

export default useFetchAndSetData;

// const useForm = (userId: string) => {

//     // api functions
//     const { getExptById } = crudApi(userId);

//     const getAndSetData = async (exptId: string, setData: Dispatch<SetStateAction<NewExpenditure>>) => {

//         const res = await getExptById(exptId);

//         if (res && res.data[0]) {
//             setData({
//                 title: res.data[0].title,
//                 date: res.data[0].date,
//                 amount: res.data[0].amount,
//                 category: res.data[0].category,
//                 description: res.data[0].description,
//                 transaction_type: res.data[0].transaction_type,
//                 user_id: res.data[0].user_id,
//             });
//         };
//     };

    

//     return {
//         getAndSetData,
//     }

// };

// export default useForm;