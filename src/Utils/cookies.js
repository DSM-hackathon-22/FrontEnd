import Cookies from "universal-cookie";

export const Cookie = new Cookies();
export const setCookie = (name, value) => {
  return localStorage.setItem(name, value);
};

export const getCookie = (name) => {
  return localStorage.getItem(name);
};
