import { toast } from "react-toastify";

const notification = (type, text, duration = 5000) => {
  toast[type](text, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
};

export default notification;
