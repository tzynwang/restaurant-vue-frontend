import { apiHelper } from "./../utils/helpers";

const getToken = () => localStorage.getItem("token");

export default {
  addFavorite({ restaurantId }) {
    // 注意這是post request，沒有要傳data所以放null
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
