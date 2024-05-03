<template>
    <div>
        <section class="blog-details-top"></section>
        <section class="article-list">
            <div class="wrapper">
                <ArticleList />
            </div>
        </section>
    </div>
</template>

<script>
import ArticleList from '@/components/blog-details/ArticleList';

export default {
    name: 'BlogDetailsPage',
    components: {
        ArticleList,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_blog-top.scss';
</style>
