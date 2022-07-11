<script>

const ENG_RSS = 'https://www.nasa.gov/rss/dyn/breaking_news.rss'
//const FR_RSS = "https://www.youtube.com/feeds/videos.xml?channel_id=UCDC6DBi0kRp6Jk21xqfvFLA"

import NewsItem from './NewsItem.vue';

export default {
  data: () => ({
    newsList: []
  }),

  components: {
    NewsItem
  },

  created() {
    this.fetchNews(ENG_RSS);
  },

  methods: {
     async fetchNews(rssUrl) {
        const res = await fetch(
          `https://api.allorigins.win/get?url=${rssUrl}`
         );
        const { contents } = await res.json();
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");
        this.newsList = [...items].map((el) => ({
          link: el.querySelector("link").innerHTML,
          title: el.querySelector("title").innerHTML,
          description: el.querySelector("description").innerHTML,
          newsDate: el.querySelector("pubDate").innerHTML
        }));
      },
    }, 
  }
</script>

<template>
  <div class="newsContainer">
  <h2 class="newsContainerTitle">Actualités</h2>
      <div v-for="item of newsList" :key="item.title">
        <NewsItem :src="require('@/assets/nasa_logo.svg')" alt="Logo de la NASA" :newsDate="item.newsDate" :title="item.title" :description="item.description" :href="item.link"/>
      </div>
  </div>
</template>

<style>
  .newsContainerTitle {
    font-family: "Pinot";
    font-size: 300%;
    margin: 5px 200px;
  }
</style>
