import axios from "axios";
import sweetalert2 from "sweetalert2";

const baseURL = "https://forum-express-api.herokuapp.com/api";

export const apiHelper = axios.create({
  baseURL,
});

apiHelper.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export const Toast = sweetalert2.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});
