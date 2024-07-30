import { Dispatch, SetStateAction } from "react";

// api
import crudApi from "../api/crudApi"

// types
import { Expenditure } from "../types/expenditure";

const useFetchData = async (userId: string, isHome: boolean = false, setExpenditures: Dispatch<SetStateAction<Expenditure[]>>) => {

    const { getAllExpt } = crudApi(userId);

    const res = await getAllExpt();

    if (res && res.data && res.data.reverse) {
        if (isHome) {
            setExpenditures(res.data.reverse().slice(0, 5));
        } else {
            setExpenditures(res.data.reverse());
        };
    };
   
};

export default useFetchData;