<template>
  <section class="about-words">
    <div class="about-words__image">
      <!-- DEBT: Добавить reveal анимацию -->
      <nuxt-img src="/about/bicycle.png" alt="About words" />
    </div>

    <div class="about-words__content">
      <div class="about-words__content-container">
        <h2 v-motion-slide-visible-left>НЕСКОЛЬКО СЛОВ О НАС И НАШЕМ ДЕЛЕ</h2>

        <p v-motion-slide-visible-bottom class="about-words__text mt-24 mt-lg-32">
          Велосипед — это не просто средство передвижения. Мы, команда World-Bike, уверены в этом. Для нас велосипед —
          это целая жизнь, полная свободы, драйва, приключений и новых открытий.
        </p>

        <p v-motion-slide-visible-bottom class="about-words__text mt-16">
          Мы искренне любим своё дело и стараемся, чтобы и для вас велосипед стал неотъемлемой частью жизни.
        </p>

        <nav v-if="socialNetworks?.length" class="about-words__social-networks">
          <ul>
            <li v-for="(network, index) in socialNetworks" :key="index">
              <a :href="network.link" target="_blank">
                <ui-icon :name="network.iconName" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAbout } from '#entities/about'

import { UiIcon } from '#shared/ui'

const { socialNetworks } = useAbout()
</script>

<style lang="scss" scoped>
.about-words {
  margin-top: 48px;

  &__text {
    @include text-desk-mob-16();
    color: var(--color-grey-3);
  }

  &__content {
    padding: 40px 20px;
    background-color: var(--color-black);
    color: var(--color-white);

    @include responsive(lg) {
      max-width: 50%;
      width: 100%;
    }
  }

  &__content-container {
    @include responsive(lg) {
      max-width: 550px;
      margin-left: auto;
      margin-right: 127px;
    }
  }

  &__image {
    object-fit: cover;
    width: 100%;
    height: 200px;
    overflow: hidden;

    @include responsive(md) {
      height: responsive-size(360px, 695px, $breakpoint--md, $breakpoint--lg);
      border-radius: 10px 0 0 10px;
    }

    @include responsive(lg) {
      height: 695px;
      max-width: 50%;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__social-networks {
    margin-top: 32px;

    ul {
      display: flex;
      align-items: center;
      column-gap: 16px;
    }

    li {
      &:hover {
        a {
          background-color: var(--color-dark);
        }

        .ui-icon {
          color: var(--color-orange);
          transform: scale(1.2);
          opacity: 0.9;
        }
      }
    }

    a {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--color-dark-grey);
      transition: background-color 0.15s ease-in-out;
    }

    .ui-icon {
      color: var(--color-white);
      font-size: 21px;
      transition: transform 0.15s ease-in-out, color 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }

    @include responsive(md) {
      margin-top: 40px;
    }
  }

  @include responsive(md) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 108px;
  }
}
</style>
