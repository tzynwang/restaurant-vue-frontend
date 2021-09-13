<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit (payload) {
      console.log(`console.log from AdminRestaurantNew: ${payload}`)
    }
  }
};
</script>
