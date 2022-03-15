<template>
  <label class="search" :data-state="state" for="search">
    <input
      type="text"
      placeholder="Search"
      :value="value"
      @click="state = 'open'"
      @blur="state = 'close'"
      @input="$emit('input', $event.target.value)"
    />
    <i class="fa fa-search" aria-hidden="true"></i>
  </label>
</template>

<script>
export default {
  name: "Search",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      state: "close",
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
.search {
  position: relative;
  display: inline-block;
  padding: 5px 12px;
  transition: all 1s ease;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #000;
    transition: all 1s ease 0.5s;
  }
  input {
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#000, 25);
  }
  i {
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"] {
    border-radius: 30px;
    padding: 5px 5px;
    transition: all 1s ease;
    &::after {
      width: 0%;
      transition: all 0.3s ease;
    }
    i {
      pointer-events: none;
    }
    input {
      width: 28px;
      height: 25px;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      -webkit-appearance: none;
    }
  }
}
</style>
