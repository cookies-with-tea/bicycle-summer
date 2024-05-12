<template>
  <div class="about-page">
    <div class="about-page__header-container">
      <div class="container">
        <h1>О нас</h1>
      </div>
    </div>

    <about-hero />
  </div>
</template>

<script setup lang="ts">
import { AboutHero } from '#pages/about/ui'

import { useAbout } from '#entities/about'

const { getAboutData } = useAbout()

await getAboutData()
</script>

<style lang="scss" scoped>
.about-page {
  h1 {
    font-size: 50px;
    line-height: 52.2px;
    letter-spacing: 5px;
    color: var(--color-white);

    @include responsive(lg) {
      font-size: 64px;
      line-height: 78.72px;
    }
  }

  // DEBT: После добавления хлебных крошек изменить padding
  &__header-container {
    padding: 70px 0 78px;
    background: url('/about/about-bg.png');

    @include responsive(lg) {
      padding: 134px 0 65px;
    }
  }
}
</style>
