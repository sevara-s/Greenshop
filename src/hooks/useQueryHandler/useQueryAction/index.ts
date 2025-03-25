import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { useReduxDispatch } from "../../useRedux";
import { setModalAuthorizationModalVisibility } from "../../../redux/modalSlice";
import notificationApi from "../../../generics/notification";
import { signInWithGoogle } from "../../../config";
import { cookieInfo } from "../../../generics/cookies";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const { notify } = notificationApi();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", JSON.stringify(user));
      notify("login");
      dispatch(setModalAuthorizationModalVisibility());
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};

export const useRegisterMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const { notify } = notificationApi();
  const { setCookie } = cookieInfo();

  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log(data);
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      notify("register");
      dispatch(setModalAuthorizationModalVisibility());
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};

export const useLoginWithGoogle = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const { setCookie } = cookieInfo();
  console.log(setCookie, "datasss");

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthorizationModalVisibility());
    },
  });
};

export const useRegisterWithGoogle = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const { setCookie } = cookieInfo();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthorizationModalVisibility());
    },
    onError: (error: { status: number }) => {
      console.log(error.status);
    },
  });
};
