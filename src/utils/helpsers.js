import axios from "axios";
import sweetalert2 from "sweetalert2";

const baseURL = "https://forum-express-api.herokuapp.com/api";

export const apiHelper = axios.create({
  baseURL,
});

export const Toast = sweetalert2.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});
