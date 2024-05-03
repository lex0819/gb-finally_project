<template>
    <div>
        <BlogTop />
        <LastPost />
        <BlogArticleList />
    </div>
</template>

<script>
import BlogTop from '@/components/blog/BlogTop.vue';
import LastPost from '@/components/blog/LastPost.vue';
import BlogArticleList from '@/components/blog/BlogArticleList.vue';

export default {
    name: 'BlogPage',
    components: {
        BlogTop,
        LastPost,
        BlogArticleList,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
