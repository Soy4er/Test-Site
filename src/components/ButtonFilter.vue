<template>
  <div
    class="filter-show"
    :class="{'--show': getInCatalog}"
  >
    <button
      type="button"
      class="btn filter-show__button"
      :class="[getToggleFillter ? 'btn--border' : 'btn--primary']"
      aria-label="Кнопка открытия фильтра"
      title="Кнопка открытия фильтра"
      @click="showFilter"
    >
      {{ getToggleFillter ? 'Закрыть подбор' : 'Подобрать квартиры' }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ButtonFilter',
  computed: {
    ...mapGetters(['getInCatalog', 'getToggleFillter']),
  },
  methods: {
    showFilter() {
      this.$store.commit('UPDATE_TOGGLE_FILLTER', !this.getToggleFillter);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-show {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 11;
  background-color: $white;
  padding: 12px 0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 62px;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  box-shadow: 0px -5px 20px rgba(86, 86, 86, 0.1);
  @media screen and (max-width: 576px) {
    display: flex;
  }
  &__button {
    width: 210px;
    &.btn--border {
      color: $black;
    }
  }
}
</style>
