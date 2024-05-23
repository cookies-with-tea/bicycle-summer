<template>
  <section class="about-companies">
    <ui-slider :breakpoints="companiesBreakpoints" :slides="aboutData?.companies">
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

const { aboutData, companiesBreakpoints } = useAbout()
</script>

<style lang="scss" scoped>
.about-companies {
  margin-top: 48px;

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
