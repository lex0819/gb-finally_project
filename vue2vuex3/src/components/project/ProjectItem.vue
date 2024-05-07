<template>
    <div class="project-item">
        <img :src="project.img" :alt="project.alt" class="project__img" />
        <div class="project__footer">
            <div class="project__info">
                <h3 class="project__name header3">{{ project.title }}</h3>
                <p class="progect__category">{{ project.keywords }}</p>
            </div>
            <a href="#" class="project__btn round__btn">
                <svg
                    width="71"
                    height="70"
                    viewBox="0 0 71 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC"></circle>
                    <path
                        d="M32.1641 44L40.1641 35L32.1641 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        project: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_project.scss';
</style>
