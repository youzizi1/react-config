import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://prod.com/api"
    : "http://test.com/api";

export const getInfo = () => axios.get(`${baseUrl}/info`);
