<template>
    <section class="project">
        <div class="wrapper">
            <h2 class="project__title header2">Follow Our Projects</h2>
            <p class="project__desc header2__desc large-paragraph">
                It is a long established fact that a reader will be distracted
                by the of readable content of page looking at its layouts
                points.
            </p>
            <ul class="project__list">
                <li
                    class="project__item"
                    v-for="(project, index) in getLimitProjects(4)"
                    :key="project.id"
                >
                    <HomeProjectItem :project="project" :index="index" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import HomeProjectItem from '@/components/home/HomeProjectItem';

export default {
    name: 'HomeProjectList',
    components: {
        HomeProjectItem,
    },
    methods: {
        ...mapMutations(['SET_PROJECTS']),
    },
    computed: {
        ...mapState(['projects']),
        ...mapActions(['fetchProjects']),
        ...mapGetters(['getLimitProjects']),
    },
    created() {
        this.SET_PROJECTS(this.fetchProjects);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_project.scss';
</style>
