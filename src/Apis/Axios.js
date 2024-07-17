import axios from "axios";
import { getCookie } from "../Utils/cookies";

export const instance = axios.create({
  baseURL: "http://43.200.245.110:8080",
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = getCookie("access_token");
    if (token) res.headers.Authorization = `Bearer ${token}`;
    return res;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);
