<template>
    <div>
        <section class="page404">
            <div class="wrapper">
                <div class="page404-box">
                    <div class="page404-info">
                        <h1 class="page404-header">404</h1>
                        <p class="page404-text">
                            We are sorry, but the page you requested was not
                            found
                        </p>
                        <router-link to="/" class="page404-btn">
                            Back To Home
                            <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                                    stroke="#CDA274"
                                    stroke-width="2"
                                    stroke-linecap="square"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </router-link>
                    </div>
                    <div class="page404-img">
                        <img src="@/assets/img/404.jpg" alt="404" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Page404',
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_404.scss';
</style>
