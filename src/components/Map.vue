<template>
  <div class="map-block">
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <br>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <yandex-map
      :coords="coords"
      :zoom="13"
      :controls="[]"
      class="map"
    >
      <ymap-marker
        marker-id="1"
        :coords="coords"
        :balloon-template="balloonTemplate"
        :icon="markerIcon"
      />
    </yandex-map>
    <p class="text text--min">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </p>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import flag from 'icons/maps-and-flags.png';

export default {
  name: 'Map',
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [59.939095, 30.315868],
    balloonTemplate: `
      <div class="ym-balloon"></div>
    `,
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: flag,
      imageSize: [37, 37],
      imageOffset: [0, 0],
      contentOffset: [0, 15],
    },
  }),
};
</script>

<style lang="scss" scoped>
.map {
  margin: 60px 0;
  height: 410px;
  & .ym-balloon {
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.32);
    border-radius: 5px;
  }
}
</style>
