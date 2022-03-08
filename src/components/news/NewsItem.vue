<template>
  <div class="item">
    <img class="item__img" :src="data.img" alt="" />
    <p class="item__title">{{ data.title }}</p>
    <span class="item__info">{{ data.date.toDateString() }}</span>
    <span class="item__info">{{ data.from }}</span>
    <p class="item__text">
      {{ data.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: block;
  text-align: start;

  &__img {
    max-width: 100%;
  }
  &__title {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 24px;
    margin: 16px 0;
    text-align: start;
  }

  &__info {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.2;
    margin-right: 16px;
  }
  &__text {
    font-family: Playfair Display;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .item {
    &__title {
      font-size: 18px;
    }
    &__info {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      opacity: 0.2;
      margin-right: 16px;
    }
    &__text {
      font-family: Playfair Display;
      font-weight: 400;
      font-size: 14px;
    }
  }
}
@media (min-width: 414px) and (max-width: 736px) {
  .item {
    &__title {
      font-size: 16px;
    }
    &__info {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      opacity: 0.2;
      margin-right: 16px;
    }
    &__text {
      font-family: Playfair Display;
      font-weight: 400;
      font-size: 12px;
    }
  }
}
</style>
