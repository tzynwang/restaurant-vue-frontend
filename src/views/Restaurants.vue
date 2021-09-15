<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />

    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <RestaurantPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
      />

      <div v-if="restaurants.length < 1">
        此類別目前無餐廳資料
      </div>
    </template>
  </div>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantPagination from "./../components/RestaurantPagination";
import Spinner from "./../components/Spinner";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantsNavPills,
    RestaurantCard,
    RestaurantPagination,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    // 在URL為 http://localhost:8080/#/restaurants 的情況下
    // page與categoryId都會是undefined
    // 畢竟this.$route.query在這個情境下就是個空物件，取query.page與query.categoryId就會是undefined

    // AC版的解決方式是 const { page = '', categoryId = '' } = this.$route.query
    // 讓page與categoryId預設為空白字串
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  beforeRouteUpdate(to, from, next) {
    // 做跟created階段一樣的事情，只是在「網址變化時」進行
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
        // 根據queryPage與queryCategoryId向後端fetch餐廳資料
        const { data } = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        // 解構data內的資料
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = data;

        // 賦值給data()
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;

        this.isLoading = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
