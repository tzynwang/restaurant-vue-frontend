<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category.name
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          :disabled="isProcessingFavorite"
        >
          {{ isProcessingFavorite ? "處理中..." : "移除最愛" }}
        </button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          :disabled="isProcessingFavorite"
        >
          {{ isProcessingFavorite ? "處理中..." : "加到最愛" }}
        </button>
        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
          :disabled="isProcessingLike"
        >
          {{ isProcessingLike ? "Processing..." : "Unlike" }}
        </button>
        <button
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          type="button"
          class="btn btn-primary like mr-2"
          :disabled="isProcessingLike"
        >
          {{ isProcessingLike ? "Processing..." : "Like" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "RestaurantCard",
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isProcessingFavorite: false,
      isProcessingLike: false,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        this.isProcessingFavorite = true;
        const { data } = await usersAPI.addFavorite({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        // 確認後端更新成功後，直接修改前端用的data()驅動畫面重渲染
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
        this.isProcessingFavorite = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
        this.isProcessingFavorite = false;
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessingFavorite = true;
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
        this.isProcessingFavorite = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
        this.isProcessingFavorite = false;
      }
    },
    async addLike(restaurantId) {
      try {
        this.isProcessingLike = true;
        const { data } = await usersAPI.addLike({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
        this.isProcessingLike = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法對餐廳按讚，請稍後再試",
        });
        this.isProcessingLike = false;
      }
    },
    async deleteLike(restaurantId) {
      try {
        this.isProcessingLike = true;
        const { data } = await usersAPI.deleteLike({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };

        this.isProcessingLike = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法對餐廳取消讚，請稍後再試",
        });
        this.isProcessingLike = false;
      }
    },
  },
};
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #efefef;
  object-fit: cover;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>
