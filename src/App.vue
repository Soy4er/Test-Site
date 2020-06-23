<template>
  <div id="app">
    <Header
      @toggleMenu="toggleMenu"
    />
    <main
      :class="{ '--show-menu': showMenu }"
    >
      <div
        ref="main"
        class="content"
        @scroll="onScroll"
      >
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header.vue';
import Footer from 'components/Footer.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(['getInCatalog']),
  },
  methods: {
    toggleMenu(showMenu) {
      this.showMenu = showMenu;
    },
    onScroll() {
      const inCatalog = (this.$refs.main.scrollTop >= 100 && this.$refs.main.scrollTop <= 3300);
      if (this.getInCatalog !== inCatalog) this.$store.commit('UPDATE_IN_CATALOG', inCatalog);
    },
  },
};
</script>

<style lang="scss" scope>
#app {
  padding: 0 80px;
  main {
    height: calc(100vh - 160px);
    transition: 0.3s;
    &.--show-menu {
      padding-top: 90px;
    }
    & .content {
      background-color: $white;
      height: 100%;
      border-radius: 10px;
      position: relative;
      overflow-y: auto;
    }
  }
}

.left-link,
.right-link {
  position: absolute;
  top: 400px;
}

@media screen and (max-width: 992px) {
  #app {
    padding: 0 12px;
  }
}
@media screen and (max-width: 768px) {
  #app main {
    &.--show-menu {
      padding-top: 280px;
    }
  }
}
</style>
