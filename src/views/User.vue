<template>
  <div class="container py-5">
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";

import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { profile, isFollowed } = data;
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants,
        } = profile;

        // 目的：「每個 Restaurant 只能出現一次，移除掉重複出現的 Restaurant」
        // 以下改為Max助教在2021/9/13 QA中重構的版本
        const commentSet = new Set();
        this.comments = Comments.filter((comment) => {
          // 沒有Restaurant的評論，捨棄
          if (!comment.Restaurant) return false;
          // 已經存在commentSet的重複評論，捨棄
          if (commentSet.has(comment.Restaurant.id)) return false;
          // 以上條件都通過的話，把該評論加到commentSet中
          commentSet.add(comment.Restaurant.id);
          
          return true;
        });

        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };

        this.isFollowed = isFollowed;
        this.followings = Followings;
        this.followers = Followers;
        this.favoritedRestaurants = FavoritedRestaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
