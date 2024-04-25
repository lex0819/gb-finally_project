<template>
    <div class="news-item">
        <h2 class="header2">{{ article.title }}</h2>
        <div v-html="article.text" class="news-text"></div>
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ['article'],

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
