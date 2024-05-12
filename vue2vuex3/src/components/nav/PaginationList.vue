<template>
    <div>
        <ul class="pagination__list small-text">
            <li
                class="pagination__item"
                data-pagination="prev"
                style="display: none"
            >
                <a href="#"></a>
            </li>
            <li
                v-for="page in totalPages"
                :key="page"
                class="pagination__item"
                :class="activePage(page)"
                :data-pagination="page"
            >
                <router-link :to="`${path}/${page}`">{{ page }}</router-link>
            </li>
            <li
                class="pagination__item"
                data-pagination="next"
                style="display: none"
            >
                <a href="#">
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
                            stroke="#292F36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PaginationList',
    props: {
        totalPages: {
            type: Number,
            default: () => {
                return null;
            },
        },
    },
    data() {
        return {
            path: null,
            currentPage: null,
        };
    },
    computed: {
        activePage(page) {
            return page === this.currentPage ? 'pagination__item_active' : '';
        },
    },
    created() {
        this.path = this.$route.path;
        this.currentPage = this.$route.params.page || 1;
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_pagination.scss';
</style>
