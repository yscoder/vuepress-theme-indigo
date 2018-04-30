<template>
  <v-layout row
            wrap
            tag="ul"
            reset>
    <v-flex xs12
            v-for="(row, i) in pageList"
            :key="i"
            tag="li">
      <slot :row="row"></slot>
    </v-flex>
    <v-flex xs12
            class="text-xs-center"
            tag="nav">
      <v-pagination :length="pagesLength"
                    v-model="pageNum"
                    prev-icon="fa-chevron-left"
                    next-icon="fa-chevron-right"></v-pagination>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    data: Array,
    current: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    pageNum: {
      get() {
        return Number(this.current)
      },
      set(val) {
        this.$emit('change', val)
      }
    },
    pageSize() {
      return this.$site.themeConfig.pagination.pageSize
    },
    pagesLength() {
      return Math.ceil(this.data.length / this.pageSize)
    },
    pageList() {
      const begin = (this.pageNum - 1) * this.pageSize
      const end = begin + this.pageSize
      return this.data.filter((item, i) => i >= begin && i < end)
    }
  }
}
</script>
<style lang="stylus">
.pagination__navigation .icon {
  font-size: 1rem !important;
}
</style>
