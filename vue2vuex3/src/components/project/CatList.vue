<template>
    <div class="category">
        <div class="category-list">
            <div
                class="category-item"
                v-for="cat in categories"
                :key="cat.id"
                @click="toggleCatActive(cat)"
                :class="{ 'cat-active': cat.name === activeCat }"
            >
                {{ cat.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'CatList',

    data() {
        return {
            activeCat: null,
        };
    },
    methods: {
        ...mapMutations(['SET_CATEGORIES']),
        toggleCatActive(cat) {
            if (this.activeCat && cat.name === this.activeCat) {
                this.activeCat = null;
            } else {
                this.activeCat = cat.name;
            }
            this.$emit('setActiveCat', cat.name);
        },
    },
    computed: {
        ...mapState(['categories']),
        ...mapActions(['fetchCategories']),
    },
    created() {
        this.SET_CATEGORIES(this.fetchCategories);
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_categories.scss';
</style>
