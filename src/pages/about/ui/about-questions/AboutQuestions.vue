<template>
  <section class="about-questions">
    <div class="about-questions__content container">
      <h2>Остались вопросы? </h2>

      <p> Позвоните нам по номеру </p>

      <h2>
        {{ applicationInfo?.phones?.[0] }}
      </h2>

      <p>
        Мы к вашим услугам! И, конечно же, приходите в наш магазин, чтобы посмотреть товары вживую, лично оценить
        качество и сделать правильный выбор!
      </p>
    </div>

    <div v-motion-slide-visible-right class="about-questions__image">
      <nuxt-img src="/about/bicyclist.png" alt="Велосипедист" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useApplication } from '#entities/application'

const { applicationInfo } = useApplication()
</script>

<style lang="scss" scoped>
.about-questions {
  background-color: var(--color-orange);
  margin-top: 90px;
  color: var(--color-white);
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: 0;
  position: relative;
  overflow: hidden;

  &__content {
    padding: 45px 0 36px;

    @include responsive(lg) {
      width: 100%;
      max-width: 534px;
      margin-right: 0;
    }
  }

  &__image {
    display: none;

    @include responsive(lg) {
      display: block;
      max-width: 954px;
      width: 100%;
    }
  }

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
