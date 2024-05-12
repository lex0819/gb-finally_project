<template>
    <div class="tags">
        <h3 class="header3">Tags</h3>
        <div class="tag-list">
            <div
                class="tag-item"
                v-for="tag in tags"
                :key="tag.id"
                @click="toggleTagActive(tag)"
                :class="{ 'tag-active': tag.name === activeTag }"
            >
                {{ tag.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'TagList',
    data() {
        return {
            activeTag: null,
        };
    },
    methods: {
        ...mapMutations(['SET_TAGS']),
        toggleTagActive(tag) {
            this.$router.push({ name: 'blog-post' });
            if (this.activeTag && tag.name === this.activeTag) {
                this.activeTag = null;
            } else {
                this.activeTag = tag.name;
            }
            this.$emit('setActiveTag', tag.name);
        },
    },
    computed: {
        ...mapState(['tags']),
        ...mapActions(['fetchTags']),
    },
    created() {
        this.SET_TAGS(this.fetchTags);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_tags.scss';
</style>
