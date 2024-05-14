<template>
  <section class="about-hero">
    <h2>
      <mark> Велосипед </mark>
       — это не просто средство передвижения!
    </h2>

    <ui-slider class="about-hero__slider" :breakpoints :slides="aboutData?.hero.useful">
      <template #slide="{ slide }">
        <div v-ripple="{ color: 'var(--color-orange)' }" class="about-hero__slide">
          <p class="about-hero__slide-title"> {{ slide.title }} </p>
          <p class="about-hero__slide-description">
            {{ slide.description }}
          </p>

          <ui-icon name="slide-path" />

          <nuxt-link class="about-hero__slide-link link" to="#"> Подробнее </nuxt-link>
        </div>
      </template>
    </ui-slider>
  </section>
</template>

<script lang="ts" setup>
import { useAbout } from '#entities/about'

import { UiIcon, UiSlider } from '#shared/ui'

const { aboutData, breakpoints } = useAbout()
</script>

<style lang="scss" scoped>
.about-hero {
  margin-top: 32px;

  &__slider {
    margin-top: 24px;

    @include responsive(lg) {
      margin-top: 80px;
    }
  }

  &__slide {
    padding: 32px 24px;
    background-color: var(--color-dark);
    color: var(--color-white);
    height: 100%;
    position: relative;
  }

  &__slide-title {
    font-size: 24px;
    line-height: 38.4px;
    letter-spacing: 0.24px;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }

  &__slide-description {
    @include text-desk-mob-16(300);

    color: var(--color-grey-3);
    position: relative;
    z-index: 1;

    @include truncate(5);

    @include responsive(lg) {
      @include truncate(6);
    }
  }

  &__slide-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 25.6px;
    display: block;
    margin-top: 24px;
    color: var(--color-white);
    position: relative;
    z-index: 1;
  }

  :deep(.ui-slider__slide) {
    width: 269px;
    height: 294px;
    border-radius: 10px;
    overflow: hidden;

    @include responsive(lg) {
      width: 400px;
      height: 334px;
    }
  }

  .ui-icon--slide-path {
    position: absolute;
    right: 0;
    width: 100%;
    height: 176px;
    color: var(--color-black);
    bottom: -16px;
    z-index: 1;
  }

  h2 {
    @include h1();
  }

  @include responsive(lg) {
    margin-top: 64px;
  }
}
</style>
