<template>
    <section class="article">
        <div class="wrapper">
            <h2 class="article__title header2">Articles & News</h2>
            <p class="article__desc header2__desc large-paragraph">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when looking at its layouts
                the points of using.
            </p>
            <ul class="article__list">
                <li v-for="article in articles.slice(0, 3)" :key="article.id">
                    <HomeArticleItem :article="article" />
                </li>
            </ul>
            <div class="article__pagination"></div>
        </div>
    </section>
</template>

<script>
import HomeArticleItem from './HomeArticleItem';
export default {
    name: 'HomeArticleList',
    components: {
        HomeArticleItem,
    },
    props: ['articles'],
};
</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_article.scss';
</style>
