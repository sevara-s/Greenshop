import {
  DashboardOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { PathProfileType, TitleCategoryType } from "../@types";
import AccountDetails from "../components/profile/main/account-details";
import MyProducts from "../components/profile/main/my-products";
import Address from "../components/profile/main/address";
import Wishlist from "../components/profile/main/wishlist";
import TrackOrder from "../components/profile/main/track-order";

export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arriwals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];

export const path_profile: PathProfileType[] = [
  {
    id: 1,
    path: "",
    Icon: UserOutlined,
    title: "Account Details",
    Components: AccountDetails,
  },
  {
    id: 2,
    path: "my-products",
    Icon: ShoppingOutlined,
    Components: MyProducts,
    title: "My Products",
  },
  {
    id: 3,
    path: "address",
    Icon: EnvironmentOutlined,
    Components: Address,
    title: "Address",
  },
  {
    id: 4,
    path: "wishlist",
    Icon: HeartOutlined,
    Components: Wishlist,
    title: "Wishlist",
  },
  {
    id: 5,
    path: "track-order",
    Icon: DashboardOutlined,
    Components: TrackOrder,
    title: "Track Order",
  },
];
