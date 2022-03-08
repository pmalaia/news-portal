<template>
  <div class="news">
    <div class="news__header">
      <p class="news__title">Latest News</p>
      <div class="news__date">
        <p class="news__today">February 18, 2022</p>
        <img
          class="news__date-sort"
          :class="asc ? 'rotate' : ''"
          src="/assets/sort.svg"
          @click="sort()"
        />
      </div>
    </div>

    <div class="news__block">
      <NewsItem
        class="news__block-element"
        v-for="(item, index) in filtered"
        :key="index"
        :index="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NewsItem from "@/components/news/NewsItem";

export default {
  name: "News",
  components: {
    NewsItem,
  },
  data() {
    return {
      arr: [
        {
          title: "0News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2021"),
          from: "CNN Indonesia",
          img: "/assets/testimg0.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "1News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2020"),
          from: "CNN Indonesia",
          img: "/assets/testimg1.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "2News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2019"),
          from: "CNN Indonesia",
          img: "/assets/testimg2.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "3News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2018"),
          from: "CNN Indonesia",
          img: "/assets/testimg3.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "4News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2017"),
          from: "CNN Indonesia",
          img: "/assets/testimg4.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "5News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2016"),
          from: "CNN Indonesia",
          img: "/assets/testimg5.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "6News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2015"),
          from: "CNN Indonesia",
          img: "/assets/testimg6.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
        {
          title: "7News Title Lorem Ipsum Dolor Sit Amet",
          date: new Date("03.12.2014"),
          from: "CNN Indonesia",
          img: "/assets/testimg7.png",
          text: "Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more",
        },
      ],
      asc: false,
    };
  },
  computed: {
    ...mapGetters(["SEARCH_QUERY"]),
    filtered() {
      //search by title
      if (this.SEARCH_QUERY === "") return this.arr;
      return this.arr.filter((item) => {
        return this.SEARCH_QUERY.toLowerCase()
          .split(" ")
          .every((v) => item.title.toLowerCase().includes(v));
      });
    },
  },
  methods: {
    sort() {
      this.asc = !this.asc;
      return this.filtered.sort((a, b) =>
        this.asc ? a.date - b.date : b.date - a.date
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.news {
  display: block;
  margin: 0 135px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__date {
    display: flex;
    align-items: center;
    &-sort {
      cursor: pointer;
    }
  }
  &__today {
    font-size: 24px;
    font-weight: 700;
    margin-right: 11px;
  }
  &__title {
    font-family: Roboto;
    text-align: start;
    font-size: 36px;
    font-weight: 700;
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    &-element {
      flex: 1 1 calc((100% / 4) - 2rem);
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .news {
    margin: 0 60px;
    &__title {
      font-size: 24px;
    }
    &__block {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      &-element {
        flex: 1 1 calc((100% / 3) - 2rem);
      }
    }
    &__today {
      font-size: 16px;
    }
  }
}

@media (min-width: 414px) and (max-width: 736px) {
  .news {
    margin: 0 35px;
    &__title {
      font-size: 24px;
    }
    &__block {
      &-element {
        flex: 1 1 calc((100% / 2) - 1rem);
      }
    }
    &__today {
      font-size: 12px;
    }
  }
}
@media (min-width: 280px) and (max-width: 413px) {
  .news {
    margin: 0 35px;
    &__title {
      font-size: 24px;
    }
    &__block {
      &-element {
        flex: 1 1 calc(100% - 1rem);
      }
    }
    &__today {
      font-size: 14px;
    }
  }
}
img {
  transition: transform 0.5s ease;
}
.rotate {
  transform: rotate(180deg);
}
</style>
