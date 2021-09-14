<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          ve-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
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
        {{ isProcessing ? "Processing..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserEdit",
  data() {
    return {
      id: -1,
      image: "",
      name: "",
      email: "",
      isProcessing: false
    };
  },
  created() {
    // 透過 this.$route.params 取得網址上的 id，才知道現在在編輯哪一個使用者
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return;
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  methods: {
    setUser(userId) {
      const { id, image, name, email } = this.currentUser;

      // 只能編輯自己
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }

      this.id = id;
      this.name = name;
      this.email = email;
      this.image = image;
    },
    handleFileChange(event) {
      const { files } = event.target;
      // 沒有上傳圖片
      if (!files.length) return;
      // 有上傳圖片則製作預覽圖
      const imageURL = window.URL.createObjectURL(files[0]);
      this.image = imageURL;
    },
    async handleSubmit(event) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }

        const form = event.target;
        const formData = new FormData(form);

        this.isProcessing = true;

        const { data } = await usersAPI.update({
          userId: this.id,
          formData,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
