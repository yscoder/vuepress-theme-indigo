<template>
  <v-container grid-list-xl
               align-center
               class="blog-container">
    <v-layout row
              wrap>
      <v-flex xs12
              v-for="slug in $blog.postList"
              :key="slug">
        <PostCard :post="slug"
                  layout="list"></PostCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PostCard from './components/PostCard'

export default {
  components: {
    PostCard
  },
}
</script>
