<template>
  <v-container grid-list-xl
               align-center
               class="blog-container py-5">
    <v-layout row
              wrap>
      <Tag v-for="item in $blog.tagList"
           :key="item"
           :slug="item">#{{item}} {{$blog.tags[item].length}}</Tag>
    </v-layout>
    <v-list row
            wrap
            v-if="pageList"
            tag="ul"
            class="reset elevation-1 mt-4">
      <template v-for="(slug, index) in pageList">
        <v-list-tile xs12
                     ripple
                     :key="slug"
                     :to="$blog.posts[slug].path">
          <v-list-tile-sub-title class="list-inline-time">
            <PostTime :date="$blog.posts[slug].frontmatter.date"></PostTime>
          </v-list-tile-sub-title>
          <v-list-tile-title class="primary--text">{{ $blog.posts[slug].title }}</v-list-tile-title>
        </v-list-tile>
        <v-divider v-if="index + 1 < pageList.length"
                   :key="index"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>
<script>
import Tag from './components/Tag'
import PostTime from './components/PostTime'

export default {
  components: {
    Tag,
    PostTime
  },
  computed: {
    tagName() {
      return this.$route.params.tagName
    },
    pageList() {
      return this.$blog.tags[this.tagName]
    }
  }
}
</script>
<style lang="stylus">
.list-inline-time {
  min-width: 120px;
  width: 200px !important;
}
</style>
