import { notification } from "antd";

type NotificationApiType = "login" | "register" | "warning" | "info";

const notificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successful" });
      
      case "register":
        return notification.success({ message: "Register successful" });
      
      case "warning":
        return notification.warning({ message: "This is a warning" });
      
      case "info":
        return notification.info({ message: "This is some information" });

      default:
        return notification.info({ message: "Unknown notification type" });
    }
  };

  return { notify };
};

export default notificationApi;
