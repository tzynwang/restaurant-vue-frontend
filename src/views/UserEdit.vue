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

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      id: -1,
      name: "",
      image: "",
    };
  },
  created() {
    // 透過 this.$route.params 取得網址上的 id，才知道現在在編輯哪一個使用者
    const { id } = this.$route.params;
    this.id = id;
  },
  methods: {
    handleFileChange(event) {
      const { files } = event.target;
      if (files.length) {
        // 有上傳檔案，產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      } else {
        // 使用者沒有選擇上傳的檔案
        this.image = "";
      }
    },
    handleSubmit(event) {
      const form = event.target;
      const formData = new FormData(form);
      formData.forEach((value, key) => {
        console.log(value, key)
      })
    },
  },
};
</script>
