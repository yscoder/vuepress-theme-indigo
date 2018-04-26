<template>
    <main class="container home-main">
        <ul class="post-list">
            <li class="post-list-item"
                v-for="slug in $blog.postList">
                <PostCard :slug="slug"></PostCard>
            </li>
        </ul>
    </main>
</template>
<script>
import PostCard from './components/PostCard'

export default {
    components: {
        PostCard
    },
}
</script>
<style lang="less">
.home-main {
    padding: 30px 0;
    min-height: 600px;
}
.post-list {
    &-item {
        margin-bottom: 30px;
    }
}
</style>
