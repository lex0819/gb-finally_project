<template>
    <div>
        <section class="">
            <div class="wrapper">
                <ProjectTop />
                <ProjectList />
                <PaginationList />
            </div>
        </section>
    </div>
</template>

<script>
import ProjectTop from '@/components/project/ProjectTop';
import ProjectList from '@/components/project/ProjectList';
import PaginationList from '@/components/nav/PaginationList';

export default {
    name: 'ProjectPage',
    components: {
        ProjectTop,
        ProjectList,
        PaginationList,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
