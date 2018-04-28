<template>
  <v-container grid-list-xl
               align-center
               class="blog-container">
    <v-layout row
              wrap>
      <v-flex xs12>
        <PostCard :post="$page"
                  :shadowZ="20">
          <Content></Content>
        </PostCard>
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
<style lang="stylus">
.content.custom {
  display: block;
  font-size: 15px;

  code {
    margin: 0 4px;
  }

  pre {
    code {
      margin: 0;
      background-color: transparent;
      box-shadow: none;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);

      &:before, &:after {
        content: '';
        letter-spacing: 0;
      }
    }
  }
}
</style>
