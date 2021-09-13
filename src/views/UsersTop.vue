<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr />
    <div class="row text-center">
      <!-- user card -->
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image | emptyImage" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowing(user.id)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  users: [
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$yVu0LNTtgpIx.ehwX6n/L.jJXKKnyE6AWdqsPdLV4.JvegiDZFtpK",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
          isAdmin: true,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2021-09-12T06:26:21.000Z",
            updatedAt: "2021-09-12T06:26:21.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 11,
      name: "hown",
      email: "rebom123@yahoo.com.tw",
      password: "$2a$10$l6u8l99Gk39H16Wssi0YWugNEVwKfqSEH10bLl0Hlf8KSJzTEhBem",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T07:28:40.000Z",
      updatedAt: "2021-09-09T07:28:40.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
          isAdmin: true,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 11,
            createdAt: "2021-09-10T11:10:08.000Z",
            updatedAt: "2021-09-10T11:10:08.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 21,
      name: "ac",
      email: "ac@gmail.com",
      password: "$2a$10$4D9Nf1EC56PGFk5k/EHOheJLBNNjbgrmAfKXUrhI0d6L628N9nKli",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T09:10:49.000Z",
      updatedAt: "2021-09-09T09:10:49.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
          isAdmin: true,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 21,
            createdAt: "2021-09-10T11:10:16.000Z",
            updatedAt: "2021-09-10T11:10:16.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 31,
      name: "ca",
      email: "ca@gmail.com",
      password: "$2a$10$krM4sbBi7pX0hZh1NnlJLuq/vSTgXF1Xfb17xkzpcnYXt4eUdncVG",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T09:47:22.000Z",
      updatedAt: "2021-09-09T09:47:22.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
          isAdmin: true,
          image: null,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          Followship: {
            followerId: 1,
            followingId: 31,
            createdAt: "2021-09-09T11:11:48.000Z",
            updatedAt: "2021-09-09T11:11:48.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
      isAdmin: true,
      image: null,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$6VAzzV4YdId/.jquKOOC8e32tdc6k/VgZfJPCCxwgMl/xAe39UXXW",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-08T08:34:40.000Z",
      updatedAt: "2021-09-08T08:34:40.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 41,
      name: "aa",
      email: "aa@gmail.com",
      password: "$2a$10$8wooCVJVp2P/7NVUPLlKbe5S1YY.kT6mvpLMYhNjnQFUjykGVWHRa",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:07:44.000Z",
      updatedAt: "2021-09-09T14:07:44.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 51,
      name: "aa",
      email: "ac@example.com",
      password: "$2a$10$fBFhZoAdlThXCWaYW2dCm.Y4fcL6Sqf1ozmGdhs77Dx8q8wAAsH2O",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:26:47.000Z",
      updatedAt: "2021-09-09T14:26:47.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 61,
      name: "1",
      email: "1@ex.com",
      password: "$2a$10$/D8ZdX6Rixo6W2LDwH.OoOi2ixfuXdYRJBiHwoN6EM9NqwYt4qcOG",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:27:26.000Z",
      updatedAt: "2021-09-09T14:27:26.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 71,
      name: "1",
      email: "2@w",
      password: "$2a$10$1Y25EgYzPaaRxNaY7tNjfunI6Bm.77snSPT1rJXEVPlRK8/ZK6VbK",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:28:48.000Z",
      updatedAt: "2021-09-09T14:28:48.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 81,
      name: "123",
      email: "123@example.com",
      password: "$2a$10$5VrXYRtgRzq0ZqjRWQRpoudG4OpX1EDvM/DyKwQyDZ1DwlTtC8ZAa",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:31:50.000Z",
      updatedAt: "2021-09-09T14:31:50.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 91,
      name: "2",
      email: "2@ex.com",
      password: "$2a$10$MkUDqTefRJ7gopD/DR8kJOUa5y7NAGDboSJi6CJ2ERT1lfQkN5nC6",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T14:34:27.000Z",
      updatedAt: "2021-09-09T14:34:27.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 101,
      name: "aa",
      email: "aa@aa",
      password: "$2a$10$tHzQKg7Z80CAx9H0KeR2duvbwdpsY0w0ElqbLrrUIOvDwlAGFFh5G",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-09T15:31:46.000Z",
      updatedAt: "2021-09-09T15:31:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 111,
      name: "Jill",
      email: "tony@stark.com",
      password: "$2a$10$Jxz1dKaHNnRXeXrNUD9ce.ba74UsTjmOUxTQlk5e/kkJK36JTSPMq",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-11T04:52:36.000Z",
      updatedAt: "2021-09-11T04:52:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 121,
      name: "早餐",
      email: "breakfast@stark.com",
      password: "$2a$10$xVzanNKLwO/qmiX5d99s5OewnOWSaIsjQWgk5wcEgj3ZKjYF5Tn4y",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-11T04:56:30.000Z",
      updatedAt: "2021-09-11T04:56:30.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 131,
      name: "YO",
      email: "YO@rrrr.com",
      password: "$2a$10$nT45O0D4AMNEBnFLEllOhu3RqzUwD1XGkxerGd3hZ2kqX3zzd96z.",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-11T14:37:18.000Z",
      updatedAt: "2021-09-11T14:37:18.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 141,
      name: "jason",
      email: "jason@stark.com",
      password: "$2a$10$kl0nckFEzfiXSBsrpMKdjOqINdpv8BcTXltmjDaOOZDBzdof8cRpS",
      isAdmin: false,
      image: null,
      createdAt: "2021-09-12T06:49:43.000Z",
      updatedAt: "2021-09-12T06:49:43.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "UsersTop",
  components: {
    NavTabs,
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData.users;
    },
    deleteFollowing(userId) {
      this.users.forEach((user) => {
        if (user.id === userId) {
          user.isFollowed = !user.isFollowed;
        }
      });
    },
    addFollowing(userId) {
      this.users.forEach((user) => {
        if (user.id === userId) {
          user.isFollowed = !user.isFollowed;
        }
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 140px;
  height: 140px;
  object-fit: cover;
}
</style>
