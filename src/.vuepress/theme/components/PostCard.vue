<template>
  <v-card :class="cardClass">
    <v-card-media>
      <v-container fill-height
                   fluid>
        <router-link :to="page.path"
                     class="headline"
                     v-if="isList">{{page.title}}</router-link>
        <span class="headline"
              v-else>{{page.title}}</span>
      </v-container>
    </v-card-media>
    <v-card-title>
      <v-flex xs12>
        <div class="grey--text">{{page.frontmatter.date | date}}</div>
        <slot>
          <div>{{page.excerpt}}</div>
        </slot>
      </v-flex>
    </v-card-title>
    <v-card-actions>
      <v-chip label
              small
              v-for="tag in page.frontmatter.tags"
              :key="tag">{{tag}}</v-chip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    post: {
      type: [String, Object],
      required: true
    },
    shadowZ: Number,
    layout: {
      type: String,
      required: true
    }
  },
  computed: {
    isList() {
      return this.layout === 'list'
    },
    page() {
      return this.isList ? this.$blog.posts[this.post] : this.post
    },
    cardClass() {
      return [
        this.shadowZ ? `elevation-${this.shadowZ}` : '',
        `${this.layout}-card`
      ]
    }
  }
}
</script>
<style lang="stylus">
.post-card {
  // padding: 0 16px 16px;
}
</style>
