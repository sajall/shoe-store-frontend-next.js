import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const handleAPICall = async (url, method, body = {}) => {
    try {
      const headers = {};
      const response = await axios({
        url,
        method,
        headers,
        data: body,
      });
      return response;
    } catch (error) {
      return error;
    }
  };