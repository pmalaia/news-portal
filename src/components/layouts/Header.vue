<template>
  <div>
    <div class="nav">
      <div>
        <router-link class="nav__link" to="/">News</router-link>
        <router-link to="/portal">Portal</router-link>
      </div>
      <div><Search v-model="searchValue" /></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Search from "@/components/Search";

export default {
  name: "Header",
  components: {
    Search,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  watch: {
    searchValue() {
      this.ADD_SEARCH_QUERY(this.searchValue);
    },
  },
  methods: {
    ...mapActions(["ADD_SEARCH_QUERY"]),
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 135px;
  &__link {
      margin-right: 5px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 60px;
  }
  @media (min-width: 414px) and (max-width: 736px) {
    margin: 0 35px;
  }
  @media (min-width: 280px) and (max-width: 413px) {
    margin: 0 35px;
  }
  a {
    font-family: Playfair Display;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      background-color: black;
      padding: 8px;
      border-radius: 4px;
    }
  }
}
</style>