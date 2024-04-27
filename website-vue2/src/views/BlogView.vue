<template>
    <div class="home">
        <BlogPage />
    </div>
</template>

<script>
// @ is an alias to /src
import BlogPage from '@/components/blog/BlogPage.vue';

export default {
    name: 'BlogView',
    components: {
        BlogPage,
    },
};
</script>
