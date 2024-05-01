<template>
    <section class="article" id="app">
        <div class="wrapper">
            <h2 class="article__title header2">Articles & News</h2>
            <p class="article__desc header2__desc large-paragraph">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when looking at its layouts
                the points of using.
            </p>
            <ul class="article__list">
                <li
                    class="article__item"
                    v-for="article in articles"
                    :key="article.id"
                >
                    <BlogArticleItem :article="article" />
                </li>
            </ul>
            <div class="article__pagination">
                <PaginationList />
            </div>
        </div>
    </section>
</template>

<script>
import BlogArticleItem from '@/components/blog/BlogArticleItem.vue';
import PaginationList from '@/components/nav/PaginationList.vue';

export default {
    name: 'BlogArticleList',
    components: {
        BlogArticleItem,
        PaginationList,
    },
    props: {
        articles: {
            type: Array,
            default: () => {
                return [];
            },
        },
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
@import '@/assets/scss/_article.scss';
</style>
