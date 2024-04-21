Vue.component('new', {
    props: ['article'],
    data() {
        return {};
    },
    methods: {},
    computed: {},
    template: `
    <div class="news-item">
        <h2 class="header2">{{article.title}}</h2>
        <div v-html="article.text" class="news-text"></div>
    </div>
    `,
});
