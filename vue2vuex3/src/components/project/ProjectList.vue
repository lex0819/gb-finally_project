<template>
    <div class="project-page">
        <CatList @setActiveCat="setActiveCat" />
        <ul class="project-list">
            <li
                v-for="project in getProjectsByCategory(activeCategory)"
                :key="project.id"
                class="project-item"
            >
                <ProjectItem :project="project" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import CatList from '@/components/project/CatList';
import ProjectItem from '@/components/project/ProjectItem';

export default {
    name: 'ProjectList',
    components: {
        ProjectItem,
        CatList,
    },
    data() {
        return {
            activeCategory: null,
        };
    },
    methods: {
        ...mapMutations(['SET_PROJECTS']),
        setActiveCat(catName) {
            if (this.activeCategory && catName === this.activeCategory) {
                this.activeCategory = null;
            } else {
                this.activeCategory = catName;
            }
        },
    },
    computed: {
        ...mapState(['projects']),
        ...mapActions(['fetchProjects']),
        ...mapGetters(['getProjectsByCategory']),
    },
    created() {
        this.SET_PROJECTS(this.fetchProjects);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_project-page.scss';
</style>
