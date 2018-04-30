<template>
  <v-toolbar app
             dark
             scroll-off-screen
             color="primary"
             :height="56"
             :scroll-threshold="100"
             class="blog-toolbar">
    <v-btn icon
           @click="toggleNav">
      <i class="fa fa-bars"></i>
    </v-btn>
    <v-toolbar-title>{{$page.title || $siteTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <i class="fa fa-search"></i>
    </v-btn>
    <Share origin="top right">
      <v-btn icon>
        <i class="fa fa-share-alt"></i>
      </v-btn>
    </Share>
  </v-toolbar>
</template>
<script>
import Share from './components/Share'

export default {
  components: {
    Share
  },
  props: {
    layout: String
  },
  methods: {
    toggleNav() {
      this.$emit('toggleNav')
    }
  }
}
</script>
<style lang="stylus">
@import './styles/config.styl';

.blog-toolbar {
  .toolbar__title {
    font-size: 18px;
  }
}
</style>
