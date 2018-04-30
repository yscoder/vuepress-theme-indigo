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
        <h2 class="display-1 mb-2"
            v-else>{{page.title}}</h2>
        <div class="post-meta">
          <time class="secondary--text"
                :datetime="page.frontmatter.date">{{page.frontmatter.date | date}}</time>
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
        <v-chip label
                small
                v-for="tag in page.frontmatter.tags"
                :key="tag">{{tag}}</v-chip>
      </v-flex>
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

.post-meta {
  time {
    font-weight: 500;
  }
}
</style>
