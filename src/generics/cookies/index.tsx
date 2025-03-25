import Cookies from "js-cookie";

export const cookieInfo = () => {
  const getCookie = (key: string): string | undefined => {
    return Cookies.get(key);
  };

  const setCookie = (key: string, data: string, days = 7): void => {
    Cookies.set(key, data, { expires: days });
  };

  const removeCookie = (key: string): void => {
    Cookies.remove(key);
  };

  return { getCookie, setCookie, removeCookie };
};
