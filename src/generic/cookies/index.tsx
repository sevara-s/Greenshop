import Cookies from "js-cookie";
export const CookieUserInfo = () => {
  const getCookie = (key: string) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key) as string) : null;
  };
  const setCookie = (key: string, data: object) => {
    return Cookies.set(key, JSON.stringify(data));
  };
  const removeCookie = (key: string) => {
    Cookies.remove(key);
  };

  const isAuthorization = getCookie("user") ? true : false;

  return { getCookie, isAuthorization, setCookie,removeCookie };
};

export default CookieUserInfo;
