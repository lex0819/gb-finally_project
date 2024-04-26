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
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/scss/_vars.scss';
@import '@/scss/_main.scss';
.article {
    margin-top: 96px;

    &__title {
        text-align: center;
    }

    &__list {
        margin-top: 52px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        column-gap: 27px;
        row-gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            row-gap: 27px;
        }
    }

    &__item {
        background-color: $color-white;
        padding: 21px;
        border: 1px solid $color-border;
        border-radius: 62px;
        transition: background-color 0.6s ease;

        &:hover {
            background-color: $color-primary3;
        }

        &:hover circle {
            fill: $color-white;
        }
    }

    &__img {
        border-radius: 62px 62px 0 0;
    }

    &__info {
        position: relative;
    }

    &__category {
        position: absolute;
        top: -56px;
        left: 20px;
        background-color: $color-white;
        border-radius: 8px 8px 8px 0;
        padding: 4px 8px 9px 11px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    &__pagination {
        margin-top: 51px;
    }
}
</style>
