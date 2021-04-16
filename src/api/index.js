import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://prod.com/api"
    : "http://localhost:3000/api";

export const getHistory = () => axios.get(`${baseUrl}/history`);
