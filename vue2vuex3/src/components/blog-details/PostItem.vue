<template>
    <div class="news-item">
        <h2 class="header2">{{ post.title }}</h2>
        <div v-html="post.text" class="news-text"></div>
    </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_news.scss';
</style>
