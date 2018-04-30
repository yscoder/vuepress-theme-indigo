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
      <v-list-tile ripple
                   color="secondary"
                   key="copy"
                   @click="copyLink">
        <v-list-tile-avatar>
          <i class="fa fa-lg fa-copy"></i>
        </v-list-tile-avatar>
        <v-list-tile-title>{{$tt('copyLink')}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <input type="text"
           :value="url"
           ref="copyEl"
           tabindex="-1"
           aria-hidden="true"
           class="fake-hide">
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
      socials: null,
      url: ''
    }
  },
  methods: {
    copyLink() {
      const $el = this.$refs.copyEl
      $el.focus()
      $el.select()
      document.execCommand('copy')
      $el.blur()
    }
  },
  beforeMount() {
    const customSocials = this.$site.themeConfig.socials
    if (!this.$isServer && customSocials) {
      const createShare = () => {
        const url = location.origin + location.pathname
        const { title, excerpt: summary } = this.$page
        const origin = location.origin + this.$site.base
        const pic = ''
        this.url = url
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
