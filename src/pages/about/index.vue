<template>
  <div class="about-page">
    <div class="about-page__header-container">
      <div class="container">
        <h1>О нас</h1>
      </div>
    </div>

    <div class="container">
      <about-hero />
    </div>

    <about-words />

    <about-best-bicycles />

    <about-questions />
  </div>
</template>

<script setup lang="ts">
import { AboutBestBicycles, AboutHero, AboutQuestions, AboutWords } from '#pages/about/ui'

import { useAbout } from '#entities/about'
const { getAboutData, getSocialNetworksData } = useAbout()

await Promise.all([getAboutData(), getSocialNetworksData()])
</script>

<style lang="scss" scoped>
.about-page {
  h1 {
    color: var(--color-white);

    @include h2();
  }

  // DEBT: После добавления хлебных крошек изменить padding
  &__header-container {
    padding: 70px 0 78px;
    background: url('/about/about-bg.png') center 0 no-repeat;
    background-size: 100% 100%;

    @include responsive(lg) {
      padding: 134px 0 65px;
    }
  }
}
</style>
