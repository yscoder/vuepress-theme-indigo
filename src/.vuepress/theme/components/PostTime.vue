<template>
  <time class="secondary--text post-time"
        :datetime="date"
        v-if="type === 'date'">{{date | date}}</time>
  <time class="secondary--text post-time"
        :datetime="date"
        v-else>{{date | dateTime}}</time>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'date'
    },
    date: [String, Date]
  }
}
</script>
<style>
.post-time {
    font-weight: 500;
}
</style>

