import axios from "axios";
export const axiosFetch = axios.create({
  // baseURL: "http://localhost:8000/api/v1/",
  baseURL: "https://backend-maranathalab-production.up.railway.app/api/v1/",
});
