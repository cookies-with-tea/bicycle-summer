<template>
  <section class="about-questions">
    <div class="about-question__content">
      <div class="container">
        <h2>Остались вопросы? </h2>

        <p> Позвоните нам по номеру </p>

        <h2>
          {{ applicationInfo?.phones?.[0] }}
        </h2>
      </div>
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

  &__content {
    padding: 45px 0 36px;
  }

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
