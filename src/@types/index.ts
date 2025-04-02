export interface ComponentTypes {
  children: React.ReactNode;
}
export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}
export interface CategoryItem {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface QueryType<T> {
  isError?: boolean;
  isLoading?: boolean;
  data?: T | null;
  error?:Error;
}
export interface DiscountType {
  id: number | string;
  title?: string;
  discount_up_to?: number;
  poster_image_url?: string;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CartType {
  category?: string;
  comments?: string[];
  created_at: string;
  created_by: string;
  description?: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  __v: number;
  _id: string;
  count?: number | undefined;
  userPrice?: number;
}
export interface TwoType {
  id: number;
  title: string;
  description: string;
  img: string;
  vektor: string;
}
export interface DataType {
  isLoading: boolean;
  isError: boolean;
  data?: CartType;
}
export interface PostType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
}
export interface FooterLinksType {
  id: number;
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  link5?: string;
}
export interface AdviceItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  border: boolean;
}
export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  username?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}
export interface CommentType {
  _id: string;
  text: string;
  createdAt?: string;
  user?: {
    name: string;
    avatar?: string;
  };
}
export interface CouponType {
  code: string;
  discount_for: number;
  id: number;
  title: string;
}
export interface MakeOrderType {
  name: string;
  surname: string;
  country: string;
  street: string;
  state: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  comment: string;
  payment_method: string;
}