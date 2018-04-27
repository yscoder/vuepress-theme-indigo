<template>
    <div class="container post-main">
        <article class="post-content">
            <div class="post-date">{{$page.frontmatter.date}}</div>
            <Content class="markdown-content"></Content>
            <ul class="post-tags">
                <li v-for="tag in $page.frontmatter.tags">{{tag}}</li>
            </ul>
        </article>
    </div>
</template>
<script>
export default {
    name: ''
}
</script>
<style lang="less">
@import './styles/config.less';

.post-main {
    padding: 0 0 50px;
}
.post-tags {
    li {
        display: inline-block;
        margin: 0 4px;
        padding: 4px 16px;
        background: #eee;
    }
}
.post-date {
    margin-bottom: 10px;
    color: @secondaryTextColor;
    font-size: 13px;
    font-weight: bold;
}
.post-content {
    margin-top: -20px;
    min-height: 100px;
    padding: 35px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
</style>
