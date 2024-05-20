<template>
  <section class="about-best-bicycles">
    <div class="container">
      <h2>МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ ИЗ ВЕЛОСИПЕДНОГО Мира</h2>

      <div class="about-best-bicycles__text-block">
        <p class="about-best-bicycles__text">
          World-Bike специализируется на продаже и обслуживании велосипедов, запчастей, аксессуаров для них и экипировки
        </p>

        <p class="mt-16 mt-md-0 color-grey-2">
          Мы знаем цену качеству. Поэтому в World-Bike только качественные премиальные товары по соответствующим ценам.
          А под заказ мы соберём для вас кастомный велосипед с уникальным дизайном и техническими характеристиками!
        </p>
      </div>
    </div>

    <div class="about-best-bicycles__image">
      <!--    parallax bg-->
      <nuxt-img src="/about/about-best.png" alt="Велосипед около моря" />
    </div>

    <div class="about-best-bicycles__best-dealers">
      <p class="about-best-bicycles__best-dealer-title">{{ aboutData?.best?.dealers?.title }}</p>

      <ui-slider class="about-best-bicycles__slider" :breakpoints :slides="aboutData?.best?.dealers?.items">
        <template #slide="{ slide }">
          <div class="about-best-bicycles__slide">
            <nuxt-link to="#">
              <p class="about-best-bicycles__slide-title"> {{ slide.title }} </p>
            </nuxt-link>

            <div class="about-best-bicycles__brands">
              <nuxt-link
                v-for="brand in slide.brands"
                :key="brand.uuid"
                class="about-best-bicycles__slide-brand"
                to="#"
              >
                {{ brand.title }}
              </nuxt-link>
            </div>
          </div>
        </template>
      </ui-slider>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAbout } from '#entities/about'

import { UiSlider } from '#shared/ui'

const { aboutData, breakpoints } = useAbout()
</script>

<style scoped lang="scss">
.about-best-bicycles {
  margin-top: 48px;

  &__text-block {
    margin-top: 24px;

    @include responsive(md) {
      display: flex;
      margin-top: 48px;
    }
  }

  &__text {
    &:first-child {
      @include responsive(md) {
        max-width: 400px;
      }
    }
  }

  &__image {
    margin-top: 24px;
    height: 160px;

    @include responsive(md) {
      margin-top: 40px;
      height: responsive-size(160px, 533px, $breakpoint--md, $breakpoint--lg);
    }

    @include responsive(lg) {
      height: 533px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__best-dealers {
    margin-top: 24px;

    @include responsive(md) {
      margin-top: 56px;
    }
  }

  &__best-dealer-title {
    @include text-desk-mob-24(500);
  }

  &__slider {
    margin-top: 16px;

    @include responsive(md) {
      margin-top: 48px;
    }
  }

  &__slide {
    padding: 24px;
    height: 100%;
    color: var(--color-white);

    a {
      color: inherit;
      text-decoration: none;
    }

    @include responsive(md) {
      padding: 40px;
    }
  }

  :deep(.ui-slider__slide) {
    width: 270px;
    height: 298px;
    border-radius: 10px;
    overflow: hidden;
    color: var(--color-white);

    &:first-child {
      background-color: var(--color-dark-grey);
    }

    &:nth-child(2) {
      background-color: var(--color-black);
    }

    &:last-child {
      background-color: var(--color-orange);
    }

    @include responsive(lg) {
      width: 730px;
      height: 216px;
    }
  }

  &__slide-title {
    @include text-desk-mob-20(500);

    @include responsive(md) {
      @include text-desk-mob-24(500);
    }
  }

  &__brands {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__brand {
    @include text-desk-mob-16;

    @include responsive(md) {
      @include text-desk-mob-subhead;
    }
  }

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
