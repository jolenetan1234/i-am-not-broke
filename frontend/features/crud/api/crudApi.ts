import "dotenv/config";
import axios from "axios";

// types
import { NewExpenditure } from "../types/expenditure";

// DOESN'T WORK IDKY
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

const crudApi = (userId: string) => {

    const getAllExpt = async () => {
        console.log(`GET ${API_BASE_URL}/api/expt/user/${userId}`);

        try {
            const res = await axios.get(`${API_BASE_URL}/api/expt/user/${userId}`);
            // const res = await axios.get(`${API_BASE_URL}/api/expt/admin`);
            console.log("Succcessfully GET expenditures", res);
            return res;
        } catch (err) {
            console.log("Failed to GET expenditures", err);
        };
    };

    const deleteExpt = async (exptId: string) => {
        console.log(`DELETE ${API_BASE_URL}/api/expt/user/${userId}/${exptId}`);

        try {
            const res = await axios.delete(`${API_BASE_URL}/api/expt/user/${userId}/${exptId}`);   
            console.log(`Successfully DELETE expenditure id ${exptId}`, res);
            return res;
        } catch (err) {
            console.log(`Failed to DELETE expenditure id ${exptId}`, err);
        };
    };

    const getExptById = async (exptId: string) => {
        console.log(`GET http://localhost:8000/api/expt/user/${userId}/${exptId}`);
        
        try {
            const res = await axios.get(`http://localhost:8000/api/expt/user/${userId}/${exptId}`);
            console.log(`Axios successfully GET data for exptId ${exptId}`, res);
            return res;
        } catch (err) {
            console.log(`AxiosError: failed to GET data for exptId ${exptId}`, err);
        };
    };

    const postExpt = async (data: NewExpenditure) => {
        console.log(`POST http://localhost:8000/api/expt/user/${userId}`);

        try {
            const res = await axios.post(`http://localhost:8000/api/expt/user/${userId}`, data);
            console.log(`Successfully created expenditure`, res);
            return res;
        } catch (err) {
            console.log(`AxiosError: failed to POST expt`, err);
        };
    };

    const putExpt = async (exptId: string, data: NewExpenditure) => {
        console.log(`Sending PUT request for userId ${userId} for exptId ${exptId}`);

        try {
            const res = await axios.put(`http://localhost:8000/api/expt/user/${userId}/${exptId}`, data);
            console.log(`Successfully updated id ${exptId}`, res);
            return res;
        } catch (err) {
            console.log(`AxiosError: failed to update exptId ${exptId}`, err);
        };
    }

    return {
        getAllExpt,
        deleteExpt,
        getExptById,
        postExpt,
        putExpt,
    };
};

export default crudApi;