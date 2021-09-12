<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h3 class="h4">
          <a href="#">{{ restaurant.name }}</a>
          &nbsp;
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h3>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment'

export default {
  name: "NewestRestaurants",
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
  filters: {
    fromNow (dateTime) {
      return dateTime ? moment(dateTime).fromNow() : '--'
    }
  }
};
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>