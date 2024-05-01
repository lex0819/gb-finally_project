<template>
    <div id="app">
        <HeaderComp />
        <!-- <HomePage :articles="articles" /> -->
        <BlogPage :lastpost="lastpost" :articles="articles" :tags="tags" />
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/nav/HeaderComp.vue';
import FooterComp from '@/components/nav/FooterComp.vue';
// import HomePage from '@/pages/HomePage.vue';
import BlogPage from '@/pages/BlogPage.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp,
        // HomePage,
        BlogPage,
    },
    data() {
        return {
            articles: [
                {
                    id: 0,
                    title: "Let's Get Solution For Building Construction Work",
                    img: ['./img/image05.jpg'],
                    alt: 'news01',
                    category: 'Kitchen Design',
                    tag: 'Kitchen',
                    keywords: ['Interior', 'Home', 'Decor'],
                    date: '26 December,2022',
                    text: "<img src='./img/kitchen01.jpg' alt='alt'/><div class='news-info'><div class='news-date'>26 December,2022</div><div class='news-keywords'>Interior / Home / Decor</div></div><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p><div class='news-design'><p class='news-design__quotes'>“</p><p>The details are not the details. They make the design.</p></div>",
                },
                {
                    id: 1,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: ['./img/Image06.jpg'],
                    alt: 'news02',
                    category: 'Living Design',
                    tag: 'Living',
                    keywords: ['Interior', 'Home', 'Decor'],
                    date: '22 December,2022',
                },
                {
                    id: 2,
                    title: 'Best For Any Office & Business Interior Solution',
                    img: ['./img/image07.jpg'],
                    alt: 'news03',
                    category: 'Inventor Design',
                    tag: 'Inventor',
                    keywords: ['Interior', 'Home', 'Decor'],
                    date: '25 December,2022',
                },
                {
                    id: 3,
                    title: "Let's Get Solution For Building Construction Work",
                    img: ['./img/news04.jpg'],
                    alt: 'news04',
                    category: 'Kitchen Design',
                    tag: 'Kitchen',
                    keywords: ['Kitchen', 'Home', 'Decor'],
                    date: '26 December,2022',
                    text: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><ol><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li><li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li></ol><img src='./img/kitchen02.jpg' alt='alt'/><p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>",
                },
                {
                    id: 4,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: ['./img/news05.jpg'],
                    alt: 'news05',
                    category: 'Living Design',
                    tag: 'Living',
                    date: '22 December,2022',
                },
                {
                    id: 5,
                    title: 'Best For Any Office & Business Interior Solution',
                    img: ['./img/news06.jpg'],
                    alt: 'news06',
                    category: 'Inventor Design',
                    tag: 'Inventor',
                    keywords: ['Interior', 'Home', 'Decor'],
                    date: '25 December,2022',
                },
            ],
            tags: [
                'Kitchen',
                'Living',
                'Inventor',
                'Bedroom',
                'Building',
                'Architecture',
            ],
            lastpost: {
                img: './img/post01.jpg',
            },
        };
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
// @import '@/assets/scss/_main.scss';
</style>
