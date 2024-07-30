import "dotenv/config";
import axios from "axios";

// DOESN'T WORK IDKY
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

const crudApi = (userId: string) => {

    const getAllExpt = async () => {
        console.log(`GET ${API_BASE_URL}/api/expt/user/${userId}`);

        try {
            const res = await axios.get(`${API_BASE_URL}/api/expt/user/${userId}`);
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
        console.log(`Axios failed to GET data for exptId ${exptId}`, err);
    };
    };

    return {
        getAllExpt,
        deleteExpt,
        getExptById,
    };
};

export default crudApi;