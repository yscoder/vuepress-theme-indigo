<template>
  <v-footer dark
            height="auto"
            class="blog-footer darken-1 mt-3">
    <v-card flat
            tile
            color="primary"
            class="primary--text text--lighten-4 text-xs-center py-3">
      <v-card-text v-html="$tt('license')"
                   class="pb-0"></v-card-text>
      <v-card-text class="pt-0 mt-1">
        <span>{{$site.themeConfig.author}} &copy; {{since}}</span>
        <span>
          <template v-if="$site.themeConfig.icpLicense">
            <a href="http://www.miitbeian.gov.cn/"
               target="_blank"
               rel="noopener noreferrer">
              {{$site.themeConfig.icpLicense}}
            </a><br>
          </template>
          Power by
          <a href="https://vuepress.vuejs.org"
             target="_blank"
             rel="noopener noreferrer">VuePress</a> Theme
          <a href="https://github.com/yscoder/vuepress-theme-indigo"
             target="_blank"
             rel="noopener noreferrer">indigo</a>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  computed: {
    since() {
      const since = this.$site.themeConfig.since
      const now = new Date().getFullYear()
      return since < now ? `${since} - ${now}` : since
    }
  }
}
</script>
<style lang="stylus">
.blog-footer {
  font-size: 13px;

  .card {
    width: 100%;
    opacity: 0.9;
  }

  .card__text {
    span {
      &:not(:first-child):before {
        content: '·';
        padding: 0 0.5em;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px dotted rgba(255, 255, 255, 0.5);

      &:hover {
        color: #fff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>
