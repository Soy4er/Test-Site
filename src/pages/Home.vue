<template>
  <div class="home">
    <Banner />
    <div
      id="catalog"
      class="block block--bg layering--mobile"
    >
      <div class="container container--full">
        <h2 class="title mb-50">
          Lorem ipsum <br class="--mobile"> dolor sit
        </h2>
        <CatalogFilter />
        <Catalog />
      </div>
    </div>
    <div
      id="map"
      class="block"
    >
      <div class="container">
        <h2 class="title mb-50">
          Местоположение
        </h2>
        <Map />
      </div>
    </div>
    <ButtonFilter />
    <Sidebar />
  </div>
</template>

<script>
import Banner from 'components/Banner.vue';
import CatalogFilter from 'components/CatalogFilter.vue';
import Catalog from 'components/Catalog.vue';
import Map from 'components/Map.vue';
import ButtonFilter from 'components/ButtonFilter.vue';
import Sidebar from 'components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    CatalogFilter,
    Catalog,
    Banner,
    Map,
    ButtonFilter,
    Sidebar,
  },
  created() {
    this.$store.dispatch('dataRequest');
  },
};
</script>

<style lang="scss" scoped>

</style>
