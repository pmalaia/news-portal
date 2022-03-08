<template>
  <div class="main-wrapper">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
export default {
  name: "Mainwrapper",
  components: {
    Header,
  },
};
</script>

<style lang="scss" >
.main-wrapper {
  margin: 0 auto;
}
</style>