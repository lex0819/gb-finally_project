<template>
    <div>
        <section class="project">
            <div class="wrapper">
                <div v-if="getProjectById(id)">
                    <h2 class="project__name header2">
                        {{ getProjectById(id).title }}
                    </h2>
                    <div
                        v-html="getProjectById(id).text"
                        class="project-text large-paragraph"
                    ></div>
                    <div class="project-slider">
                        <VueSlickCarousel :arrows="true" :dots="true">
                            <div
                                v-for="(pic, index) in getProjectById(id).img"
                                :key="index"
                            >
                                <img :src="pic" :alt="getProjectById(id).alt" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
                <div v-else>
                    <h1 class="header1">the project {{ id }} has not found</h1>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'ProjectOne',
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            id: null,
        };
    },
    methods: {
        ...mapMutations(['SET_PROJECTS']),
    },
    computed: {
        ...mapState(['projects']),
        ...mapActions(['fetchProjects']),
        ...mapGetters(['getProjectById']),
    },
    created() {
        this.SET_PROJECTS(this.fetchProjects);
        this.id = this.$route.params.id;
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_project.scss';
</style>
