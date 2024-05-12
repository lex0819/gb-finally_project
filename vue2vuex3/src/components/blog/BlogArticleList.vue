<template>
    <div>
        <LastPost :post="getLastPost" />
        <section class="article" id="app">
            <div class="wrapper">
                <h2 class="article__title header2">Articles & News</h2>
                <p class="article__desc header2__desc large-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page when looking
                    at its layouts the points of using.
                </p>
                <ul class="article__list">
                    <li
                        class="article__item"
                        v-for="post in paginatedCatalog"
                        :key="post.id"
                    >
                        <BlogArticleItem :post="post" />
                    </li>
                </ul>
                <div class="article__pagination">
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
                            <router-link :to="`/blog/${page}`">{{
                                page
                            }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import LastPost from '@/components/blog/LastPost.vue';
import BlogArticleItem from '@/components/blog/BlogArticleItem.vue';

export default {
    name: 'BlogArticleList',
    components: {
        BlogArticleItem,
        LastPost,
    },
    data() {
        return {
            perPage: 6,
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
    },
    computed: {
        ...mapState(['posts']),
        ...mapActions(['fetchPosts']),
        ...mapGetters([
            'posts',
            'getLastPost',
            'getPostsTotalPages',
            'paginatedPosts',
        ]),
        currentPage() {
            //получаем текущую страницу прямо из роутера
            return this.$route.params.page || 1;
        },
        totalPages() {
            // console.log(this.projects);
            return this.getPostsTotalPages(this.perPage);
        },
        paginatedCatalog() {
            const { currentPage, perPage } = this;
            return this.paginatedPosts(currentPage, perPage);
        },
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_article.scss';
@import '@/assets/scss/_pagination.scss';
</style>
