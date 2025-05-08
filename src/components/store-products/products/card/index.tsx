import { Tooltip } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

//icon
import {
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { AuthUser, CardType, WishlistItemType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { addData } from "../../../../redux/shopSlice";
import { NotificationApi } from "../../../../generic/notifications";
import CookieUserInfo from "../../../../generic/cookies";
import {
  useDeleteIsLiked,
  useIsLiked,
} from "../../../../hooks/useQueryHandler/useQueryActions";

const Card: FC<CardType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const notify = NotificationApi();
  const { mutate: disLiked } = useDeleteIsLiked();
  const { mutate } = useIsLiked();
  const { getCookie, setCookie } = CookieUserInfo();
  let user: AuthUser = getCookie("user");
  const [wishlist, setWishlist] = useState<WishlistItemType[]>(
    user?.wishlist || []
  );
  const isLiked = wishlist.some((item) => item.flower_id === props._id);
  const isLike = () => {
    user = {
      ...user,
      wishlist: [
        ...(user.wishlist as WishlistItemType[]),
        { route_path: props.category, flower_id: props._id },
      ],
    };
    setWishlist(user.wishlist!);
    setCookie("user", user);
    mutate({ route_path: props.category, flower_id: props._id });
  };
  const disLike = () => {
    user = {
      ...user,
      wishlist: [
        ...user.wishlist!?.filter((value) => value.flower_id !== props._id),
      ],
    };
    setWishlist(user.wishlist!);
    setCookie("user", user);
    disLiked({ _id: props._id as string });
  };
  const style_icons: string =
    "bg-[#ffffff] w-[35px] h-[35px] flex rounded-lg  justify-center items-center cursor-pointer text-[20px] text-primary border border-primary";
  return (
    <div className="cursor-pointer border-t-2 hover:border-primary">
      <div className="group h-[320px] bg-[#f5f5f5] flex items-center justify-center relative max-[400px]:h-[250px] max-[600px]:h-[280px]">
        <img
          src={props.main_image}
          className="w-4/5 h-4/5  "
          alt={props.title}
        />
        <div className="hidden items-center absolute bottom-4 gap-5 group-hover:flex transition-all duration-300">
          <div
            onClick={() => {
              dispatch(addData(props));
              notify("add-data");
            }}
            className={style_icons}
          >
            <Tooltip placement="bottom" title={"Shopping card"} color="#46A358">
              <ShoppingCartOutlined className="text-[22px]" />
            </Tooltip>
          </div>
          {isLiked ? (
            <div onClick={disLike} className={style_icons}>
              <HeartFilled className="text-[22px] text-primary" />
            </div>
          ) : (
            <div onClick={isLike} className={style_icons}>
              <HeartOutlined className="text-[22px]" />
            </div>
          )}
          <div
            onClick={() => navigate(`/shop/${props.category}/${props._id}`)}
            className={style_icons}
          >
            <Tooltip placement="bottom" title={"Product info"} color="#46A358">
              <SearchOutlined className="text-[22px]" />
            </Tooltip>
          </div>
        </div>
      </div>
      <h3 className="mt-1 font-medium">{props.title}</h3>
      <div className="flex items-center gap-2">
        <h3 className="text-primary text-[18px] font-bold">{props.price}</h3>
        <h3 className="font-light text-[#a5a5a5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
