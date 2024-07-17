import { getCookie } from "../Utils/cookies";
import AfterHeader from "./Header";
import BeforeHeader from "./HeaderBefore";

export const CheckHeader = () => {
  const token = getCookie("access_token");

  return <>{token ? <AfterHeader /> : <BeforeHeader />}</>;
};
