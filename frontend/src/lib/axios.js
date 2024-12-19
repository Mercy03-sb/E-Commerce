import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:8080/api" : "/api",
  withCredentials: true, //INFO: Allows to send cookies with the request
});

export default axiosInstance;
