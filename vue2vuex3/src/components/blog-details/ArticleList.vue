<template>
    <div class="news">
        <ul class="news-list">
            <li v-for="(item, index) in filterArticlesTag" :key="index">
                <ArticleItem :article="item" />
            </li>
        </ul>
        <div class="news-tags">
            <TagList :tags="tags" @chosenTag="setTag" />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import ArticleItem from '@/components/blog/ArticleItem';
import TagList from '@/components/blog/TagList';

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
        TagList,
    },
    methods: {
        setTag(tag) {
            this.tag = tag;
        },
    },
    computed: {
        filterArticlesTag() {
            if (!this.tag) {
                return this.articles;
            } else {
                return this.articles.filter((it) => it.tag === this.tag);
            }
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_news.scss';
</style>
