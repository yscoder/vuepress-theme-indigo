<template>
  <v-card :class="shadowZ ? `elevation-${shadowZ}` : ''">
    <v-card-media>
      <v-container fill-height
                   fluid>
        <router-link :to="page.path"
                     class="headline">{{page.title}}</router-link>
      </v-container>
    </v-card-media>
    <v-card-title>
      <div>
        <div class="grey--text">{{page.frontmatter.date}}</div>
        <slot>
          <div>{{page.excerpt}}</div>
        </slot>
      </div>
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
    shadowZ: Number
  },
  computed: {
    page() {
      return typeof this.post === 'string' ? this.$blog.posts[this.post] : this.post
    }
  }
}
</script>
