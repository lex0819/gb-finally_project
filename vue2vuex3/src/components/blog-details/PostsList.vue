<template>
    <div class="news">
        <ul class="news-list" v-if="!id">
            <li v-for="post in getPostsByTag(activeTag)" :key="post.id">
                <PostItem :post="post" />
            </li>
        </ul>
        <div v-else class="news-list">
            <div v-if="getPostById(id)">
                <PostItem :post="getPostById(id)" />
            </div>
            <div v-else>
                <h1 class="header1">the post {{ id }} has not found</h1>
            </div>
        </div>
        <div class="news-tags">
            <TagList @setActiveTag="setActiveTag" />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import PostItem from '@/components/blog-details/PostItem';
import TagList from '@/components/blog-details/TagList';

export default {
    name: 'PostList',
    components: {
        PostItem,
        TagList,
    },
    data() {
        return {
            id: null,
            activeTag: null,
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
        setActiveTag(tagName) {
            if (this.activeTag && tagName === this.activeTag) {
                this.activeTag = null;
            } else {
                this.id = null;
                this.$router.push({ name: 'blog-post' });
                this.activeTag = tagName;
            }
        },
    },
    computed: {
        ...mapState(['posts']),
        ...mapActions(['fetchPosts']),
        ...mapGetters(['getPostsByTag', 'getPostById']),
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
        this.id = this.$route.params.id;
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_news.scss';
</style>
