<template>
  <form
    class="catalog-filter"
    :class="{'--show --show-bottom': showCatalog}"
    @submit.prevent="submit"
  >
    <div class="catalog-filter__rooms">
      <label>Комнаты</label>
      <div class="catalog-filter__rooms-controls">
        <input
          v-for="item in rooms"
          :id="item.id"
          :key="item.id"
          v-model="room"
          type="radio"
          :value="item.value"
        >
      </div>
      <div class="catalog-filter__rooms-buttons">
        <button
          v-for="item in rooms"
          :key="item.id"
          type="button"
          class="btn btn--filter"
          :class="{'btn--primary': item.value === room}"
          :aria-label="item.name"
          :title="item.name"
          @click="buttonRooms(item.value)"
        >
          {{ item.value }}
        </button>
      </div>
    </div>
    <div class="controls-slider">
      <label for="floor-min">Этаж</label>
      <div class="controls-slider__input">
        <input
          id="floor-min"
          v-model.number="floor[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="floor-max"
          v-model.number="floor[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="floor"
        :tooltip="'none'"
        v-bind="{ min: defaultFilter.floor[0], max: defaultFilter.floor[1] }"
        style="padding: 0;"
      />
    </div>
    <div class="controls-slider">
      <label for="square-min">Площадь, <span>м<sup>2</sup></span></label>
      <div class="controls-slider__input">
        <input
          id="square-min"
          v-model.number="square[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="square-max"
          v-model.number="square[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="square"
        :tooltip="'none'"
        v-bind="{ min: defaultFilter.square[0], max: defaultFilter.square[1] }"
        style="padding: 0;"
      />
    </div>
    <div class="controls-slider">
      <label for="price-min">Стоимость, <span>млн. р.</span></label>
      <div class="controls-slider__input">
        <input
          id="price-min"
          v-model.number="price[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="price-max"
          v-model.number="price[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="price"
        :tooltip="'none'"
        :interval="0.1"
        v-bind="{ min: defaultFilter.price[0], max: defaultFilter.price[1] }"
        style="padding: 0;"
      />
    </div>
    <div class="catalog-filter__buttons">
      <button
        type="submit"
        class="btn btn--primary"
        aria-label="Кнопка применения фильтра"
        title="Кнопка применения фильтра"
      >
        Применить
      </button>
      <button
        type="button"
        class="btn btn--empty"
        aria-label="Кнопка сброса фильтра"
        title="Кнопка сброса фильтра"
        @click="clearFilter"
      >
        сбросить фильтр
      </button>
    </div>
  </form>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import { mapGetters } from 'vuex';

export default {
  name: 'CatalogFilter',
  components: { VueSlider },
  data: () => ({
    rooms: [
      { id: 'studio', value: 'XS', name: 'Квартира студия' },
      { id: 'one-room', value: '1k', name: 'Однокомнатная квартира' },
      { id: 'two-room', value: '2k', name: 'Двухкомнатная квартира' },
      { id: 'three-room', value: '3k', name: 'Трехкомнатная квартира' },
    ],
    filterLocal: null,
    defaultFilter: {
      name: '',
      floor: [1, 99],
      square: [1, 99],
      price: [1, 999],
    },
    room: '',
    floor: [1, 99],
    square: [1, 99],
    price: [1, 999],
  }),
  computed: {
    ...mapGetters(['getFilter', 'getDefaultFilter', 'getToggleFillter']),
    showCatalog() {
      return this.getToggleFillter;
    },
  },
  watch: {
    getFilter: {
      handler(filter) {
        if (filter) {
          this.room = filter.room;
          this.floor = filter.floor;
          this.square = filter.square;
          this.price = filter.price;
        }
      },
      immediate: true,
    },
    getDefaultFilter: {
      handler(filter) {
        if (filter) this.defaultFilter = filter;
      },
      immediate: true,
    },
  },
  methods: {
    buttonRooms(val) {
      this.room = val;
    },
    clearFilter() {
      this.$store.commit('CLEAR_FILTER');
    },
    submit() {
      this.filterLocal = {
        room: this.room,
        floor: this.floor,
        square: this.square,
        price: this.price,
      };
      this.$store.commit('UPDATE_FILTER', this.filterLocal);
      if (this.showCatalog) this.$store.commit('UPDATE_TOGGLE_FILLTER', !this.getToggleFillter);
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-filter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 60px;
  margin-bottom: 50px;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    transition: .3s;
    position: fixed;
    bottom: -750px;
    left: 0;
    background-color: $white;
    z-index: 10;
    width: 100%;
    box-shadow: 0px -5px 20px rgba(86, 86, 86, 0.1);
    border-radius: 10px;
    padding: 30px;
  }
  & label {
    text-transform: uppercase;
    font-family: $font-family-base-bold;
    & span {
      text-transform: none;
    }
  }
  &__rooms {
    &-controls {
      display: none;
    }
    &-buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 5px;
      & button {
        width: 100%;
      }
    }
  }
  &__floor {
    &-controls {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      & span {
        margin: 0 5px;
        opacity: .5;
      }
      & input {
        width: 80px;
        height: 40px;
        text-align: center;
      }
    }
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 576px) {
      display: grid;
      grid-column-gap: 30px;
      grid-template-columns: 1fr 1fr;
    }
    & .btn--primary {
      margin-top: 27px;
      @media screen and (max-width: 576px) {
        margin-top: 0;
      }
    }
    & .btn--empty {
      position: relative;
      font-size: 10px;
      color: $black;
      width: auto;
      border-radius: 0;
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: $primary;
        position: absolute;
        bottom: 5px;
        left: 0;
      }
    }
  }
}
</style>
