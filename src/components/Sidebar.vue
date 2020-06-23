<template>
  <div class="sidebar">
    <a
      href="/"
      class="sidebar-item sidebar-left"
      @click.prevent="scrollTo('#catalog')"
    >Подбор</a>
    <a
      href="/"
      class="sidebar-item sidebar-right"
      @click.prevent="scrollTo('#map')"
    >Местоположение</a>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  &-item {
    width: 200px;
    height: 80px;
    top: calc(50% - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 600;
  }
  &-left {
    left: -60px;
    transform: rotate(-90deg);
  }
  &-right {
    right: -60px;
    transform: rotate(90deg);
  }
}
</style>
