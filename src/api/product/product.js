import { handleAPICall } from "../handleApi";
import urls from "./urls";

export const getSingleProductApi = async (id) => {
  const res = await handleAPICall(`${urls.products}/${id}`, "GET");
  return res;
};

export const getproductsApi = async () => {
  const response = await handleAPICall(`${urls.products}`, "GET");
  return response;
};




