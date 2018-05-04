<template>
  <router-link :to="to"
               :tag="tag"
               exact
               exact-active-class="tag-active">
    <v-chip label
            small
            v-ripple
            class="capitalize chip-tag">
      <slot>{{slug}}</slot>
    </v-chip>
  </router-link>
</template>
<script>
export default {
  props: {
    slug: String,
    tag: String
  },
  computed: {
    to() {
      const tags = this.$site.themeConfig.tags
      return tags && tags.path ? tags.path.replace(':tagName', this.slug) : ''
    }
  }
}
</script>
<style lang="stylus">
@import '../styles/config.styl';

.tag-active {
  .chip {
    color: #fff !important;
    background: $primary-color !important;
  }
}

.chip-tag {
  &.chip {
    .chip__content {
      cursor: inherit;
    }
  }
}
</style>


