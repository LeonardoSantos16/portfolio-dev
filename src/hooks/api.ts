import axios from "axios";

export const api = axios.create({
  baseURL: "https://leonardomendes-api.vercel.app",
});
