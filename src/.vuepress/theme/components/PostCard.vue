<template>
    <article class="post-card">
        <div class="post-card-time">{{post.frontmatter.date}}</div>
        <h3 class="post-card-title">
            <router-link :to="post.path">{{post.title}}</router-link>
        </h3>
        <div class="post-card-tags">
            <!-- <router-link :to="`/tags/${tag}`"
                         v-for="tag in post.frontmatter.tags"
                         :key="tag">{{tag}}</router-link> -->
            <span v-for="tag in post.frontmatter.tags"
                  :key="tag">{{tag}}</span>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed: {
        post() {
            return this.$blog.posts[this.slug]
        }
    }
}
</script>
<style lang="less">
.post-card {
    padding: 30px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
    &-tags {
        margin-top: 8px;
        span {
            display: inline-block;
            margin-right: 8px;
            padding: 4px 16px;
            background: #eee;
        }
    }
}
</style>
