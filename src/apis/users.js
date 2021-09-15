import { apiHelper } from "./../utils/helpers";

const getToken = () => localStorage.getItem("token");

export default {
  addFavorite({ restaurantId }) {
    // 注意這是post request，沒有要傳data所以放null
    return apiHelper.post(`/favorite/${restaurantId}`, null);
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`);
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null);
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`);
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null);
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`);
  },
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`);
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`);
  },
  getTopUsers() {
    return apiHelper.get("/users/top");
  },
};
