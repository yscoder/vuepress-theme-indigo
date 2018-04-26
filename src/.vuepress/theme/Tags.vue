<template>
    <div class="container tags-main">
        <ul class="tags-list default">
            <li v-for="item in $blog.tagList"
                :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: ''
}
</script>
<style lang="less">
.tags-main {
    padding: 30px 0;
}
</style>
