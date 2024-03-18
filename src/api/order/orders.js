import { handleAPICall } from "../handleApi";
import urls from "./urls";


export const getOrdersApi = async () => {
  const res = await handleAPICall(`${urls.orders}`, "GET");
  return res;
};

export const placeOrderApi = async (data) => {
  const body = data;
  const res = await handleAPICall(`${urls.orders}`, "POST", body);
  return res;
};


export const updateOrderApi = async (id) => {
  const res = await handleAPICall(`${urls.orders}/approve/${id}`, "PUT");
  return res;
};
