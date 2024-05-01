<template>
    <div>
        <BlogTop />
        <LastPost :post="lastpost" />
        <BlogArticleList :articles="articles" />
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
    props: {
        lastpost: {
            type: Object,
            default: () => {
                return {};
            },
        },
        articles: {
            type: Array,
            default: () => {
                return [];
            },
        },
        // tags: {
        //     type: Array,
        //     default: () => {
        //         return [];
        //     },
        // },
    },
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
