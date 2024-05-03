<template>
    <div class="tags">
        <h3 class="header3">Tags</h3>
        <div class="tag-list">
            <div
                class="tag-item"
                v-for="(tag, index) in setTagsActive"
                :key="index"
                @click="tagActive(index)"
                :class="{ 'tag-active': tag.isActive }"
            >
                {{ tag.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagList',

    props: ['tags'],
    data() {
        return {
            tagsActive: [],
        };
    },
    methods: {
        tagActive(index) {
            let tag = '';
            const chosenTag = this.tagsActive[index];
            if (chosenTag.isActive === true) {
                chosenTag.isActive = false;
                tag = '';
            } else {
                this.tagsActive.forEach((it) => (it.isActive = false));
                chosenTag.isActive = true;
                tag = chosenTag.name;
            }

            this.$emit('chosenTag', tag);
        },
    },
    computed: {
        setTagsActive() {
            return this.tagsActive;
        },
    },
    mounted() {
        this.tagsActive = this.tags.map((element) => {
            return {
                name: element,
                isActive: false,
            };
        });
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
.tags {
}

.tag {
    &-list {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    &-item {
        display: inline-block;
        font-size: 18px;
        line-height: 1.25;
        letter-spacing: 0.02em;
        text-align: center;
        color: $color-black;
        padding: 9px 30px;
        background-color: $color-primary3;
        border-radius: 10px;
        cursor: pointer;
    }

    &-active {
        color: $color-white;
        background-color: $color-primary2;
    }
}
</style>
