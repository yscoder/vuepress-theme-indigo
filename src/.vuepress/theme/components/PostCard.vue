<template>
  <v-card :class="cardClass"
          tag="article">
    <!-- <v-card-media>
    </v-card-media> -->
    <v-card-title>
      <v-flex xs12>
        <router-link :to="page.path"
                     class="headline post-title-link"
                     v-if="isList">{{page.title}}</router-link>
        <h2 class="display-1 mb-3"
            v-else>{{page.title}}</h2>
        <div class="post-meta">
          <PostTime :date="page.frontmatter.date"></PostTime>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-text class="pt-0 pb-0">
      <v-flex xs12>
        <slot>{{page.excerpt}}</slot>
      </v-flex>
    </v-card-text>
    <v-card-actions>
      <v-flex xs12>
        <Tag v-for="tag in page.frontmatter.tags"
             :key="tag"
             :slug="tag">{{tag}}</Tag>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>
<script>
import Tag from './Tag'
import PostTime from './PostTime'

export default {
  components: {
    Tag,
    PostTime
  },
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
      return typeof this.post === 'string' ? this.$blog.posts[this.post] : this.post
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
@import '../styles/config.styl';

.post-card {
  // padding: 0 16px 16px;
}

.list-card {
  .card__title {
    padding-bottom: 0;
  }
}

.post-title-link {
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $primary-color;
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.3s ease-in-out;
  }

  &:hover, &:active {
    &:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
</style>
