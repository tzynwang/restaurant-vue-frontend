<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "Processing..." : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    const { register } = to.params;
    if (register === "success") {
      Toast.fire({
        icon: "success",
        title: "註冊成功，請輸入Email與密碼進行登入",
      });
    }
    next();
  },
  methods: {
    async handleSubmit(event) {
      try {
        // email與password沒有填寫直接return
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入 email 和 password",
          });
          return;
        }

        // 與後端確認email password組合的正確性
        this.isProcessing = true;

        const { data } = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // email password組合正確，保存token，移動至路由restaurants
        window.localStorage.setItem("token", data.token);
        this.$router.push({ name: "restaurants" });
      } catch (error) {
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style></style>
