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
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_news.scss';
</style>
