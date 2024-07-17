import { instance } from "./Axios";

export const SixNews = async () => {
  return await instance.get("/news");
};
