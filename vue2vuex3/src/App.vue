<template>
    <div id="app">
        <HeaderComp />
        <!-- <HomePage /> -->
        <!-- <BlogPage /> -->
        <!-- <BlogDetailsPage /> -->
        <ProjectPage />
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/nav/HeaderComp.vue';
import HomePage from '@/components/home/HomePage.vue';
import BlogPage from '@/components/blog/BlogPage.vue';
import BlogDetailsPage from '@/components/blog-details/BlogDetailsPage.vue';
import ProjectPage from '@/components/project/ProjectPage.vue';
import FooterComp from '@/components/nav/FooterComp.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        HomePage,
        BlogPage,
        BlogDetailsPage,
        ProjectPage,
        FooterComp,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
