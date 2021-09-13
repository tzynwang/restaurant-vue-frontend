<template>
  <div class="container py-5">
    <AdminNav />
    <router-link :to="{ name: 'admin-restaurant-new' }" class="btn btn-primary mb-4">
      New Restaurant
    </router-link>

    <AdminRestaurantsTable />
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import AdminRestaurantsTable from "./../components/AdminRestaurantsTable";

export default {
  name: "AdminRestaurants",
  components: {
    AdminNav,
    AdminRestaurantsTable,
  },
};
</script>
