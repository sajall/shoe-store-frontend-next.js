import { handleAPICall } from "../handleApi";
import urls from "./urls";

export const signupApi = async (data) => {
    const body = data;
    console.log(data , 'this is api data');
    const res = await handleAPICall(`${urls.signup}`, "POST", body);
    return res;
};

export const logInApi = async (data) => {
    const res = await handleAPICall(`${urls.login}`, "PUT", data);
    return res;
};



