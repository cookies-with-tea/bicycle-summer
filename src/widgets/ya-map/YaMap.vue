<template>
  <yandex-map
    v-model="map"
    class="ya-map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
    width="100%"
    height="500px"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />

    <yandex-map-marker :settings="{ coordinates: [37.617644, 55.755819] }">
      <div class="ya-map__marker">
        <ui-icon name="map-marker" />
      </div>
    </yandex-map-marker>
  </yandex-map>
</template>

<script setup lang="ts">
import type { YMap } from '@yandex/ymaps3-types'
import { shallowRef } from 'vue'
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps'

import { UiIcon } from '#shared/ui'

const map = shallowRef<null | YMap>(null)
</script>

<style lang="scss" scoped>
.ya-map {
  &__marker {
    width: 112px;
    height: 138px;

    :deep(.ui-icon) {
      width: inherit;
      height: inherit;
    }
  }
}
</style>
