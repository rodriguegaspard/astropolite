<script>

const ENG_RSS = 'https://www.nasa.gov/rss/dyn/breaking_news.rss'
//const FR_RSS = "https://www.youtube.com/feeds/videos.xml?channel_id=UCDC6DBi0kRp6Jk21xqfvFLA"

//import NewsItem from './NewsItem.vue';

export default {
  data: () => ({
    newsList: []
  }),

  created() {
    this.fetchNews(ENG_RSS);
  },

  methods: {
     async fetchNews(rssUrl) {
        const res = await fetch(
          `https://api.allorigins.win/get?url=${rssUrl}`
         );
        const { contents } = await res.json();
        console.log(contents);
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");
        this.newsList = [...items].map((el) => ({
          link: el.querySelector("link").innerHTML,
          title: el.querySelector("title").innerHTML,
          description: el.querySelector("description").innerHTML,
        }));
      },
    }, 
  }
</script>

<template>
  <div class="newsContainer">
      <div v-for="item of newsList" :key="item.title">
      <h1>{{ item.title }}</h1>
      <p>{{ item.author }}</p>
      <p>{{ item. description }}</p>
      <a :href="item.link">{{ item.link }}</a>
    </div>
  </div>
</template>

<style>
</style>
