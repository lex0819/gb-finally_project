<template>
    <div class="home">
        <ProjectPage />
    </div>
</template>

<script>
// @ is an alias to /src
import ProjectPage from '@/components/project/ProjectPage.vue';

export default {
    name: 'ProjectView',
    components: {
        ProjectPage,
    },
};
</script>
