<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h3 class="h4">
          <a href="#">{{ comment.Restaurant.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        by
        <a href="#">{{ comment.User.name }}</a>
        at {{ comment.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "NewestComments",
  props: {
    comments: {
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

<style>
</style>