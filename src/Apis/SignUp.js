import { instance } from "./Axios";

export const SignUp = async (data) => {
  return await instance.post("/user", data);
};
