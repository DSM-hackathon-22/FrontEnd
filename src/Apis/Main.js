import { instance } from "./Axios";

export const MainApi = async (data) => {
  return await instance.post("/interested", {
    interests: [data],
  });
};
