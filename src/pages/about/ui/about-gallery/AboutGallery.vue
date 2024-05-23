<template>
  <section class="about-gallery">
    <h2>Фотогалерея</h2>

    <ui-slider :breakpoints :slides="aboutData?.gallery" class="about-gallery__slider">
      <template #slide="{ slide }">
        <div class="about-gallery__image">
          <nuxt-img :src="slide.src" :alt="slide.alt" />
        </div>
      </template>
    </ui-slider>
  </section>
</template>

<script setup lang="ts">
import { useAbout } from '#entities/about'

import { UiSlider } from '#shared/ui'

const { aboutData, breakpoints } = useAbout()
</script>

<style lang="scss" scoped>
.about-gallery {
  margin-top: 48px;

  &__slider {
    margin-top: 32px;

    @include responsive(md) {
      margin-top: 80px;
    }
  }

  &__image {
    width: 235px;
    height: 228px;
    border-radius: 10px;

    @include responsive(md) {
      width: 400px;
      height: 228px;
    }
  }

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
