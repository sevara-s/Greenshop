import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";
type NotificationApiType =
  | "login"
  | "register"
  | "warning"
  | "info"
  | "add-data"
  | "delete"
  | "succses_coupon"   
  | "coupon"
  | "coupon_404";

interface NotificationConfig {
  type: NotificationType;
  message: string;
  description?: string;
  duration?: number;
}

const notificationApi = () => {
  const notify = (type: NotificationApiType) => {
    const configs: Record<NotificationApiType, NotificationConfig> = {
      login: {
        type: "success",
        message: "Login successful",
        description: "You have successfully logged in",
        duration: 2,
      },
      register: {
        type: "success",
        message: "Registration complete",
        description: "Your account has been created successfully",
        duration: 2,
      },
      warning: {
        type: "warning",
        message: "Warning",
        description: "Please check your input and try again",
        duration: 3,
      },
      info: {
        type: "info",
        message: "Information",
        description: "This operation may take a few moments",
        duration: 3,
      },
      "add-data": {
        type: "success",
        message: "Added to cart",
        description: "The item has been added to your shopping cart",
        duration: 2,
      },
      coupon: {
        type: "error",
        message: "Coupon required",   
        description: "Please enter a valid coupon code",   
        duration: 3,
      },
      delete: {
        type: "warning",
        message: "Item removed",  
        description: "The product has been removed from your cart",
        duration: 3,
      },
      succses_coupon: {   
        type: "success",
        message: "Discount applied",   
        description: "Your coupon has been successfully redeemed",
        duration: 3,
      },
      coupon_404: {
        type: "error",  
        message: "Coupon not found",   
        description: "The coupon code you entered is invalid or expired",
        duration: 3,
      },
    };

    const config = configs[type] || {
      type: "info",
      message: "Notification",
      description: "An unknown action was performed",
    };

    notification[config.type]({
      message: config.message,
      description: config.description,
      duration: config.duration,
    });
  };

  return { notify };
};

export default notificationApi;