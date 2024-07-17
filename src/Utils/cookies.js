export const setCookie = (name, value) => {
  return localStorage.setItem(name, value);
};

export const getCookie = (name) => {
  return localStorage.getItem(name);
};

export const deleteCookie = (name) => {
  return localStorage.removeItem(name);
};
