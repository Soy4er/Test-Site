<template>
  <header class="header">
    <div class="header-content">
      <button
        class="btn btn--empty button-menu"
        :class="{ 'btn--border': showMenu }"
        type="button"
        aria-label="Button show menu"
        title="Button show menu"
        @click="toggleMenu()"
      >
        <Burger />
        <p>Меню</p>
      </button>
      <div class="logo">
        <router-link
          to="/"
          title="Logotype"
        >
          Логотип
        </router-link>
      </div>
      <router-link
        :to="{ name: isFeedback ? 'Home' : 'Feedback' }"
        class="btn button-form"
        :class="[isFeedback ? 'btn--border' : 'btn--primary']"
        aria-label="Button show form"
        title="Button show form"
      >
        {{ isFeedback ? 'Закрыть' : 'Форма' }}
      </router-link>
      {{ this.$router.name }}
    </div>
    <Menu :show-menu="showMenu" />
  </header>
</template>

<script>
import Menu from 'components/Menu.vue';
import Burger from 'icons/burger.svg';

export default {
  name: 'Header',
  components: {
    Burger,
    Menu,
  },
  data: () => ({
    showMenu: false,
  }),
  computed: {
    getPageName() { return this.$route.name; },
    isFeedback() { return this.getPageName === 'Feedback'; },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$emit('toggleMenu', this.showMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  &-content {
    height: 80px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  & .button-menu {
    display: flex;
    align-items: center;
    width: 110px;
    padding: 0.3125rem 1.25rem;
    letter-spacing: 2px;
    @media screen and (max-width: 576px) {
      width: 103px;
      padding: 0.3125rem 1rem;
    }
    & svg {
      margin-right: 10px;
    }
  }
  & .button-form {
    width: 175px;
    justify-self: end;
    @media screen and (max-width: 992px) {
      width: 160px;
      padding: 0.3125rem 0;
    }
    @media screen and (max-width: 768px) {
      width: 140px;
    }
    @media screen and (max-width: 576px) {
      width: 83px;
    }
  }
}
</style>
