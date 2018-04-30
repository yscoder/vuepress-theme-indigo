<template>
  <v-container grid-list-xl
               align-center
               class="blog-container">
    <Pagination :current="pageNum"
                :data="$blog.postList"
                @change="goPage">
      <PostCard :post="row"
                layout="list"
                slot-scope="{ row }"></PostCard>
    </Pagination>
  </v-container>
</template>
<script>
import Pagination from './components/Pagination'
import PostCard from './components/PostCard'

export default {
  components: {
    Pagination,
    PostCard
  },
  computed: {
    pageNum() {
      return this.$route.params.pageNum || 1
    }
  },
  methods: {
    goPage(pageNum) {
      const path = this.$site.themeConfig.pagination.path
      this.$router.push(pageNum === 1 ? '/' : path.replace(':pageNum', pageNum))
    }
  }
}
</script>
