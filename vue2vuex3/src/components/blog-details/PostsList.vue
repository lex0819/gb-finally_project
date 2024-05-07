<template>
    <div class="news">
        <ul class="news-list">
            <li v-for="post in getPostsByTag(activeTag)" :key="post.id">
                <PostItem :post="post" />
            </li>
        </ul>
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
            activeTag: '',
        };
    },
    methods: {
        ...mapMutations(['SET_POSTS']),
        setActiveTag(tagName) {
            if (this.activeTag && tagName === this.activeTag) {
                this.activeTag = null;
            } else {
                this.activeTag = tagName;
            }
        },
    },
    computed: {
        ...mapState(['posts']),
        ...mapActions(['fetchPosts']),
        ...mapGetters(['getPostsByTag']),
    },
    created() {
        this.SET_POSTS(this.fetchPosts);
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_news.scss';
</style>
