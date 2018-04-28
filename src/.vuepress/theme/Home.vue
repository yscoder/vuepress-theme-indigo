<template>
  <main class="container home-main">
    <ul class="post-list">
      <li class="post-list-item"
          v-for="slug in $blog.postList"
          :key="slug + 1">
        <PostCard :slug="slug"></PostCard>
      </li>
      <li class="post-list-item"
          v-for="slug in $blog.postList"
          :key="slug + 2">
        <PostCard :slug="slug"></PostCard>
      </li>
    </ul>
  </main>
</template>
<script>
import PostCard from './components/PostCard'

export default {
  components: {
    PostCard
  },
}
</script>
<style lang="less">
.home-main {
    padding: 30px 0;
    min-height: 600px;
}
.post-list {
    &-item {
        margin-bottom: 30px;
    }
}
</style>
