<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  restaurants: [
    {
      id: 161,
      name: "曼谷",
      tel: "0223546789",
      address: "台大對面",
      opening_hours: "11:00",
      description: "一間泰式料理",
      image: null,
      viewCounts: 13,
      createdAt: "2021-09-09T16:32:13.000Z",
      updatedAt: "2021-09-11T05:31:29.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 141,
      name: "Daniel",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2021-09-09T09:10:47.000Z",
      updatedAt: "2021-09-09T09:10:47.000Z",
      CategoryId: 0,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 131,
      name: "Ricky",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2021-09-09T09:10:22.000Z",
      updatedAt: "2021-09-09T09:10:22.000Z",
      CategoryId: 0,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 121,
      name: "HintzZzZzZz",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2021-09-09T09:00:39.000Z",
      updatedAt: "2021-09-09T09:00:39.000Z",
      CategoryId: 0,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 61,
      name: "麥當勞",
      tel: "1234",
      address: "台北市",
      opening_hours: "08:00",
      description: "123",
      image: null,
      viewCounts: 0,
      createdAt: "2021-09-08T16:48:19.000Z",
      updatedAt: "2021-09-08T16:48:19.000Z",
      CategoryId: 6,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 51,
      name: "Reeds Cafe",
      tel: "+886227903266",
      address: "114台北市內湖區成功路三段146號",
      opening_hours: "11:00",
      description:
        "室內設計很棒！麵包及飲料也很有品質，怕冰塊太多的人可以事先告知店員去冰",
      image: "https://i.imgur.com/16jIbQP.jpeg",
      viewCounts: 0,
      createdAt: "2021-09-08T09:24:01.000Z",
      updatedAt: "2021-09-08T11:07:37.000Z",
      CategoryId: 7,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 50,
      name: "Mya Schroeder",
      tel: "1-120-152-2684 x769",
      address: "2314 Ortiz Circle",
      opening_hours: "08:00",
      description: "Rerum possimus qui maiores nesciunt facere rem et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.82286216240476",
      viewCounts: 3,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T18:04:16.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Maribel Funk",
      tel: "(729) 391-7170 x454",
      address: "395 Allen Forest",
      opening_hours: "08:00",
      description: "quidem voluptatem unde",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.751212109278935",
      viewCounts: 0,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Dorris Corkery",
      tel: "307-275-1941 x004",
      address: "233 Mable Court",
      opening_hours: "08:00",
      description: "Magnam deleniti soluta. Quis sapiente et recusanda",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.79640118915488",
      viewCounts: 0,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Charlie Senger",
      tel: "(800) 402-0726",
      address: "721 Nitzsche Forks",
      opening_hours: "08:00",
      description: "odio eaque vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.06437850733074",
      viewCounts: 0,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteFavorite(restaurantId) {
      this.restaurants.forEach((restaurant) => {
        if (restaurant.id === restaurantId) {
          restaurant.isFavorited = !restaurant.isFavorited;
        }
      });
    },
    addFavorite(restaurantId) {
      this.restaurants.forEach((restaurant) => {
        if (restaurant.id === restaurantId) {
          restaurant.isFavorited = !restaurant.isFavorited;
        }
      });
    },
  },
};
</script>

<style>
.card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
