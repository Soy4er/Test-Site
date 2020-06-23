<template>
  <div class="catalog">
    <div
      v-for="item in filteredCatalog"
      :key="item.id"
      class="catalog-item"
    >
      <div class="catalog-item__header">
        <div class="catalog-item__floor">
          {{ item.floor }} этаж
        </div>
        <div class="catalog-item__sizes">
          {{ item.short | shortNameFilter }} <span>-</span> {{ item.square }}м<sup>2</sup>
        </div>
      </div>
      <div class="catalog-item__body">
        <div class="catalog-item__number">
          <span>№{{ item.building_id }}</span>
        </div>
        <div class="catalog-item__img">
          <img
            :src="item.plan"
            :alt="item.name"
            :title="item.name"
          >
        </div>
      </div>
      <div class="catalog-item__footer">
        <div class="catalog-item__price">
          <div class="catalog-item__price-full">
            {{ item | fullPriceFilter }}р.
          </div>
          <div class="catalog-item__price-meter">
            {{ item | pricePerMeterFilter }} р. за м<sup>2</sup>
          </div>
        </div>
        <button
          type="button"
          class="catalog-item__detailed btn btn--primary"
          aria-label="Button to go to the detailed material of the apartment"
          title="Button to go to the detailed material of the apartment"
        >
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import short from '@/lib/flat';

export default {
  filters: {
    fullPriceFilter(item) {
      return item.price_full.toLocaleString();
    },
    pricePerMeterFilter(item) {
      return Math.round(item.price_full / item.square).toLocaleString();
    },

    shortNameFilter(value) {
      return short(value, false, true);
    },
  },
  computed: {
    ...mapGetters(['filteredCatalog']),
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media screen and (max-width: 1465px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
  &-item {
    position: relative;
    background-color: $white;
    padding: 10px;
    border-radius: 10px;
    font-family: $font-family-base-bold;
    font-size: $font-size-sm;
    width: 100%;
    height: 365px;
    transition: .3s;
    &:hover {
      box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
      & .catalog-item__body {
        height: 200px;
      }
      & .catalog-item__detailed {
        opacity: 1;
        visibility: visible;
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
    }
    &__floor {
      opacity: 0.5;
    }
    &__sizes span {
      opacity: 0.5;
    }
    &__body {
      border: 1px solid $gray-300;
      border-radius: 5px;
      height: 250px;
      transition: .3s;
      position: relative;
    }
    &__number {
      position: absolute;
      right: 0;
      & span {
        padding: 5px 10px;
        border-bottom: 1px solid $gray-300;
        border-left: 1px solid $gray-300;
        border-radius: 0 5px;
      }
    }
    &__img {
      height: 100%;
      padding: 31px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        height: 100%;
      }
    }
    &__price {
      margin-top: 10px;
      text-align: right;
      &-full {
        font-size: $font-size-lg;
      }
      &-meter {
        font-size: $font-size-sm;
        opacity: .5;
      }
    }
    &__detailed {
      position: absolute;
      bottom: 10px;
      width: calc(100% - 20px);
      opacity: 0;
      visibility: hidden;
      transition: .3s;
    }
  }
}
</style>
