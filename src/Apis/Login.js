import { instance } from "./Axios";

export const Login = async (data) => {
  return await instance.post("/login", data);
};
