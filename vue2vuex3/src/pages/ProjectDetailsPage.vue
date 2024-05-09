<template>
    <div>
        <section class="project-top"></section>
        <ProjectOne />
    </div>
</template>

<script>
import ProjectOne from '@/components/project-details/ProjectOne.vue';

export default {
    name: 'ProjectDetailsPage',
    components: {
        ProjectOne,
    },
};
</script>
<style lang="scss">
.project-top {
    width: 100%;
    height: 356px;
    background-image: url('@/assets/img/banner-project-one.jpg');
    background-repeat: no-repeat;
    background-position: center;
}
</style>
