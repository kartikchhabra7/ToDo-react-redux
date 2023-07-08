import { toast } from "react-toastify";

export const showErrorNotification = (message) => {
  toast.error(message);
};

export const showSuccessNotification = (message) => {
  toast.success(message);
};
