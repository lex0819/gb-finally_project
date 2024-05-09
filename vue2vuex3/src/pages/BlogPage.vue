<template>
    <div>
        <BlogTop />
        <BlogArticleList />
    </div>
</template>

<script>
import BlogTop from '@/components/blog/BlogTop.vue';
import BlogArticleList from '@/components/blog/BlogArticleList.vue';

export default {
    name: 'BlogPage',
    components: {
        BlogTop,
        BlogArticleList,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
