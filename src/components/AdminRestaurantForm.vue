<template>
  <form v-show="!isLoading" @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">*Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">*Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        style="object-fit: cover;"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      // AdminRestaurantNew與AdminRestaurantEdit共用
      // New的時候帶空資料
      // Edit的時候靠props接收親元件傳下來的資料
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant,
      },
      isLoading: true,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();

        this.categories = data.categories;
        // isLoading預設為true，僅有在成功fetch到全部餐廳類別後才會轉為false
        // 進而顯示整個表單
        this.isLoading = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
    handleFileChange(event) {
      const { files } = event.target;
      if (files.length) {
        // 有上傳檔案，產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      } else {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = "";
      }
    },
    handleSubmit(event) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱",
        });
        return;
      }

      if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別",
        });
        return;
      }

      const form = event.target;
      const formData = new FormData(form);
      // 把資料傳給親元件
      this.$emit("after-submit", formData);
    },
  },
  watch: {
    // 為了Edit情境準備
    // /admin/restaurants/:id/edit的狀態下換路由時會重fetch配合:id的餐廳資訊
    // 監看initialRestaurant值是否有變化，若更新則覆蓋到this.restaurant上
    initialRestaurant: function(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
};
</script>
