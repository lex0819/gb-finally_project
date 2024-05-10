<template>
    <div>
        <section class="blog-details-top"></section>
        <section class="article-list">
            <div class="wrapper">
                <PostsList />
            </div>
        </section>
    </div>
</template>

<script>
import PostsList from '@/components/blog-details/PostsList';

export default {
    name: 'BlogDetailsPage',
    components: {
        PostsList,
    },
    data() {
        return {};
    },
    created() {},
    beforeRouteEnter(to, from, next) {
        // console.log(Number(to.params.id));
        next();
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_blog-top.scss';
</style>
