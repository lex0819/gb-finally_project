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
                class="pagination__item pagination__item_active"
                data-pagination="1"
            >
                <a href="#">01</a>
            </li>
            <li class="pagination__item" data-pagination="2">
                <a href="#">02</a>
            </li>
            <li class="pagination__item" data-pagination="3">
                <a href="#">03</a>
            </li>
            <li class="pagination__item" data-pagination="next">
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

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
.pagination {
    &__list {
        margin-top: 51px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        border: 1px solid $color-primary1;
        border-radius: 100%;
        cursor: pointer;
        background-color: $color-white;

        &:hover {
            background-color: $color-primary1;
        }
    }

    &__item_active {
        background-color: $color-primary3;
        border: none;
    }
}
</style>
