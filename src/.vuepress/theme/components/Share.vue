<template>
  <v-menu bottom
          transition="scale-transition"
          :origin="origin"
          v-show="!!socials">
    <template slot="activator">
      <slot></slot>
    </template>
    <v-list>
      <v-list-tile ripple
                   color="secondary"
                   v-for="item in socials"
                   :key="item.text"
                   :href="item.href"
                   target="_brank"
                   rel="noopener noreferrer">
        <v-list-tile-avatar>
          <i class="fab fa-lg"
             :class="`fa-${item.icon}`"></i>
        </v-list-tile-avatar>
        <v-list-tile-title class="capitalize">{{$tt(item.text)}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
import defaultSocials from '../libs/socials'

export default {
  props: {
    origin: String
  },
  data() {
    return {
      socials: null
    }
  },
  methods: {
  },
  beforeMount() {
    const customSocials = this.$site.themeConfig.socials
    if (!this.$isServer && customSocials) {
      const createShare = () => {
        const url = location.origin + location.pathname
        const { title, excerpt: summary } = this.$page
        const origin = location.origin + this.$site.base
        const pic = ''
        this.socials = customSocials.map(item => {
          const { icon, share } = defaultSocials[item]
          const href = share({ url, title, summary, origin, pic })
          return { text: item, icon, href }
        })
      }
      this.$watch('$route', createShare)
      createShare()
    }
  }
}
</script>
<style lang="stylus">
</style>
