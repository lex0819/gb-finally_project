<template>
    <div class="logo">
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
            />
        </svg>
        <div class="logo__title">Interno</div>
    </div>
</template>

<script>
export default {
    name: 'LogoComp',
};
</script>
<style lang="scss">
.logo {
    display: flex;
    gap: 10px;
    align-items: center;

    &__title {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        line-height: 1.25;
    }
}
</style>
