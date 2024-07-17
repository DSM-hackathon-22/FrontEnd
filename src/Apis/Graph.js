import { instance } from "./Axios";

export const TwoGraph = async () => {
  return await instance.get("/stock");
};
