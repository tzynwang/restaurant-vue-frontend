<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 41,
    name: "Annie Collins",
    tel: "076.299.6499",
    address: "237 Ashlynn Flats",
    opening_hours: "08:00",
    description:
      "Provident enim ipsa iste id minima quia explicabo. Odit maxime voluptatem est recusandae aut. Ad dolorum aliquam minima iste aut.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=37.081383081285054",
    viewCounts: 0,
    createdAt: "2021-09-08T08:34:40.000Z",
    updatedAt: "2021-09-08T08:34:40.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
    },
    Comments: [
      {
        id: 91,
        text: "Accusantium praesentium voluptates hic labore eaque.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
          isAdmin: true,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
        },
      },
      {
        id: 41,
        text: "Ut voluptas est dolorem rem.",
        UserId: 3,
        RestaurantId: 41,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$6VAzzV4YdId/.jquKOOC8e32tdc6k/VgZfJPCCxwgMl/xAe39UXXW",
          isAdmin: false,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
        },
      },
      {
        id: 141,
        text:
          "Alias praesentium corrupti non cum nostrum corporis voluptatibus adipisci.",
        UserId: 3,
        RestaurantId: 41,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$6VAzzV4YdId/.jquKOOC8e32tdc6k/VgZfJPCCxwgMl/xAe39UXXW",
          isAdmin: false,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
        },
      },
    ],
  },
};

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>
