// import "dotenv/config.js";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL; // idk why this doesn't work tho
const BASE_URL = "http://localhost:8000";

const SIGNUP_REQ = `${BASE_URL}/api/auth/signup`;

const LOGIN_REQ = `${BASE_URL}/api/auth/login`;

export {
    SIGNUP_REQ,
    LOGIN_REQ,
};