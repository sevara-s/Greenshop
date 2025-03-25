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
  isError: boolean;
  isLoading: boolean;
  data: T | null;
}
export interface DiscountType {
  id: number;
  title: string;
  discount_up_to: number;
  poster_image_url: string;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CartType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
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
