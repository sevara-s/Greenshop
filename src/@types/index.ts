export interface ComponentType {
  children: React.ReactNode;
}

export interface FieldType {
  email?: string;
  password?: string;
}

export interface FieldRegisterType {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
}

export interface CategoryType {
  count: number;
  created_at?: string;
  created_by?: string;
  route_path?: string;
  title?: string;
  _id?: number;
}

export interface QueryType<T> {
  isError?: boolean;
  isLoading?: boolean;
  data?: T;
}

export interface DiscountType {
  id: number;
  title: string;
  discoount_up_to: number;
  poster_image_url: string;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CardType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  discount: boolean;
  detailed_images: string[];
  discount_price: "12";
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  _id: string;
}

export interface CardDataType extends CardType {
  counter: number;
  userPrice: number;
}

export interface WishlistItemType {
  flower_id: string;
  route_path: string;
}
interface BillingAdres {
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
}
export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishlistItemType[];
  username?: string;
  billing_address?: BillingAdres;
  followers?: string[];
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}
export interface MakeOrderType {
  name: string;
  surname: string;
  country: string;
  street: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  comment: string;
  payment_method: string;
}

export interface BlogType {
  content: string;
  created_at: string;
  created_by: string;
  reaction_length: number;
  short_description: string;
  title: string;
  views: number;
  _id: string;
}
export interface PathProfileType {
  id: number;
  title: string;
  path: string;
  Components: React.FC;
  Icon: React.ComponentType;
}

export interface OrderType {
  billing_address: BillingAdres;
  created_at: string;
  created_by: string;
  extra_shop_info: {
    total: number;
    method: string;
  };
  shop_List: CardDataType[];
  _id: string;
}
export interface AddressType {
  name: string;
  surname: string;
  country: string;
  town: string;
  street_address: string;
  additional_street_address?: string;
  state: string;
  zip: string;
  email: string;
  phone_number: string;
}

export interface AccountDetails {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  username: string;
  profile_photo: ProfilePhoto;
}

interface ProfilePhoto {
  file: {
    response: {
      image_url: {
        url: string;
      };
    };
  };
}

export interface BlogPosts {
  content: string;
  created_at: string;
  created_by: string;
  reaction_length: number;
  short_description: string;
  title: string;
  views: number;
  __v: number;
  _id: string;
}

export interface UserInfoType {
  billing_address?: object;
  create_account_limit?: number;
  create_plant_limit?: number;
  create_post_limit?: number;
  created_at?: string;
  created_by?: string;
  email?: string;
  followers?: object[];
  hashtags?: object[];
  name?: string;
  order_list?: object[];
  password?: string;
  permission?: { create?: false; update?: false; delete?: false; read?: true };
  profile_photo?: string;
  surname?: string;
  user_type?: string;
  username?: string;
  wishlist?: object[];
  __v?: number;
  _id?: string;
}
export interface AuthUser2<T> {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: T;
  username?: string;
  billing_address?: T;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}
export interface BlogTypeApi {
  data?: BlogType[]
  isLoading: boolean
  isError: boolean
}
export interface BlogTypeApiItem {
  data?: BlogType;
  isLoading: boolean;
  isError: boolean;
}
export interface UserBodyTitleType {
  id: string
  title: string
  Component: React.FC
}

export interface UserTypeApi {
  data?: AuthUser2<CardType[]>;
  isLoading: boolean;
  isError: boolean;
}
