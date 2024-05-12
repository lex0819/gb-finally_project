<template>
    <div class="project-page">
        <CatList @setActiveCat="setActiveCat" />
        <div v-if="activeCategory">
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
        <div v-else>
            <ul class="project-list">
                <li
                    v-for="project in paginatedCatalog"
                    :key="project.id"
                    class="project-item"
                >
                    <ProjectItem :project="project" />
                </li>
            </ul>
            <div class="pagination">
                <ul class="pagination__list small-text">
                    <li
                        v-for="page in totalPages"
                        :key="page"
                        class="pagination__item"
                        :class="{
                            pagination__item_active: page == currentPage,
                        }"
                        :data-pagination="page"
                    >
                        <router-link :to="`/project/${page}`">{{
                            page
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
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
            perPage: 6,
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
        ...mapGetters([
            'getProjectsByCategory',
            'getProjectsTotalPages',
            'paginatedProjects',
        ]),
        currentPage() {
            //получаем текущую страницу прямо из роутера
            return this.$route.params.page || 1;
        },
        totalPages() {
            // console.log(this.projects);
            return this.getProjectsTotalPages(this.perPage);
        },
        paginatedCatalog() {
            const { currentPage, perPage } = this;
            return this.paginatedProjects(currentPage, perPage);
        },
    },
    created() {
        this.SET_PROJECTS(this.fetchProjects);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_project-page.scss';
@import '@/assets/scss/_pagination.scss';
</style>
