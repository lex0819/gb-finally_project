<template>
    <section class="big-top">
        <div class="wrapper">
            <div class="big-top__inner">
                <h1 class="header1">Let Your Home Be Unique</h1>
                <p class="big-top__text">
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                </p>
                <button class="simple__btn">
                    Get Started
                    <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                            stroke="#CDA274"
                            stroke-width="2"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BigTop',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
.big-top {
    padding-top: 12px;

    &__inner {
        background-color: #fff;
        background-image: url('@/assets/img/Banner.jpg');
        min-height: 758px;
        border-radius: 70px;
        background-repeat: no-repeat;
        background-position: center;
        padding: 208px 52px;
    }

    &__text {
        font-weight: 400;
        font-size: 22px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: $color-text;
        white-space: pre-line;
        text-align: left;
        margin-top: 18px;
    }
}

.simple__btn {
    margin-top: 21px;
    @include default-btn($color-white, $color-primary2);
}
</style>
