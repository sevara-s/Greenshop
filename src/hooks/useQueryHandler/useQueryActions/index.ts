import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import {
  setModalAuthVisibility,
  setOrderModalVisibility,
} from "../../../redux/modalSlice";
import { NotificationApi } from "../../../generic/notifications";
import { signInWithGoogle } from "../../../config";
import CookieUserInfo from "../../../generic/cookies";
import { getCoupon } from "../../../redux/shopSlice";
import { OrderType } from "../../../@types";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login");
      console.log(data);
    },
  });
};

export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("register");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useLoginWithGoogle = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
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
      console.log(data);

      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login-google");
    },
    onError: (data) => {
      console.log(data);
    },
  });
};

export const useRegisterWithGoogle = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = NotificationApi();
  const { setCookie } = CookieUserInfo();
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
      console.log(data);

      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      dispatch(setModalAuthVisibility());
      notify("login-google");
    },
    onError: (data) => {
      console.log(data);
    },
  });
};

export const useGetCoupon = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = NotificationApi();
  return useMutation({
    mutationFn: (coupon_code: string) =>
      axios({
        url: "features/coupon",

        params: { coupon_code },
      }),

    onSuccess: (data) => {
      dispatch(getCoupon(Number(data.data.discount_for)));
      notify("coupon");
    },
    onError: (data) => {
      console.log(data);
      notify("isnot-coupon");
    },
  });
};



export const useFollowUser = () => {
  const axios = useAxios()
  const notify = NotificationApi()

  return useMutation({
      mutationFn: (data: {_id: string}) => {
          return axios({
              url: "user/follow",
              method: "POST",
              body: data,
          })
      },
      onSuccess: () => {
          notify("follow")
      },
  })
}

export const useUnfollowUser = () => {
  const axios = useAxios()
  const notify = NotificationApi()

  return useMutation({
      mutationFn: (data: {_id: string}) => {
          return axios({
              url: "user/unfollow",
              method: "POST",
              body: data,
          })
      },
      onSuccess: () => {
          notify("unfollow")
      },
  })
}


export const useMakeOrder = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "order/make-order",
        method: "POST",
        body: data,
      }),

    onSuccess: () => {
      dispatch(setOrderModalVisibility());
    },
    onError: (data) => {
      console.log(data);
    },
  });
};
export const useEditAddress = () => {
  const axios = useAxios();
  const notify = NotificationApi();
  return useMutation({
    mutationFn: (data: object) => {
      return axios({
        url: "user/address",
        method: "POST",
        body: data,
      });
    },
    onSuccess: (data) => {
      notify("address");
      console.log(data);
    },
  });
};

const useDeleteOrderCashe = () => {
  const queryClinet = useQueryClient();
  return ({ _id }: { _id: string }) => {
    queryClinet.setQueryData(
      ["order-list"],
      (oldData: OrderType[] | undefined) => {
        if (oldData) {
          return oldData.filter((value) => value._id !== _id);
        } else {
          return [];
        }
      }
    );
  };
};
export const useDeleteOrder = () => {
  const axios = useAxios();
  const deleteOrder = useDeleteOrderCashe();
  const notify = NotificationApi();

  return useMutation({
    mutationFn: (data: { _id: string }) => {
      deleteOrder(data);
      return axios({ url: "order/delete-order", method: "DELETE", body: data });
    },
    onSuccess: () => {
      notify("order");
    },
  });
};

export const useIsLiked = () => {
  const axios = useAxios();
  const notify = NotificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/create-wishlist", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("like");
    },
  });
};
export const useDeleteIsLiked = () => {
  const axios = useAxios();
  const notify = NotificationApi();

  return useMutation({
    mutationFn: (data: { _id: string }) => {
      return axios({
        url: "user/delete-wishlist",
        method: "DELETE",
        body: data,
      });
    },
    onSuccess: () => {
      notify("dislike");
    },
  });
};

export const useEditDetails = () => {
  const axios = useAxios();
  const notify = NotificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/account-details", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("details");
    },
  });
};
