<template>
    <div class="home">
        <ProjectPage />
    </div>
</template>

<script>
// @ is an alias to /src
import ProjectPage from '@/pages/ProjectPage.vue';

export default {
    name: 'ProjectView',
    components: {
        ProjectPage,
    },
};
</script>
