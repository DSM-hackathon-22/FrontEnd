import { instance } from "./Axios";
import { LoginType } from '../Type/type';

export const Login = async (data: LoginType) => {
  return await instance.post('/user', data);
}