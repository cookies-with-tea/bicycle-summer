<template>
  <section class="about-team">
    <div class="container">
      <h2>WORLD-BIKE – ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА!</h2>

      <div class="about-team__content">
        <div class="about-team__text-block">
          <p>
            Все наши сотрудники — это бывшие профессиональные велосипедисты, чемпионы и призёры соревнований Европы
            и России, участники отечественной сборной. Не сомневайтесь, если кто-то и способен предоставить
            вам по-настоящему профессиональную консультацию, то это они.
          </p>

          <div class="about-team__questions">
            <p>Консультанты World-Bike помогут вам в любом вопросе:</p>

            <ul class="about-team__questions-list">
              <li class="about-team__question">
                <ui-icon name="check" />
                подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
              </li>
              <li class="about-team__question">
                <ui-icon name="check" />
                подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
              </li>
              <li class="about-team__question">
                <ui-icon name="check" />
                консультации по любой теме, касающейся спортивной тематики.
              </li>
            </ul>
          </div>
        </div>

        <div class="about-team__image">
          <nuxt-img src="/about/team.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UiIcon } from '#shared/ui'
</script>

<style lang="scss" scoped>
.about-team {
  margin-top: 48px;

  &__content {
    display: flex;
    flex-direction: column-reverse;

    @include responsive(md) {
      margin-top: 80px;
      flex-direction: row;
      gap: 42px;
    }
  }

  &__image {
    margin-top: 16px;

    @include responsive(md) {
      margin-top: 0;
      border-radius: 10px;
      overflow: hidden;
      width: 620px;
      min-width: 620px;
      height: 481px;
    }
  }

  &__questions {
    margin-top: 32px;

    @include responsive(md) {
      margin-top: 64px;
    }
  }

  &__questions-list {
    margin-top: 24px;

    @include responsive(md) {
      margin-top: 26px;
    }
  }

  &__question {
    display: flex;
    align-items: center;
    gap: 16px;

    .ui-icon {
      font-size: var(--font-size--icon-sm);
    }
  }

  @include responsive(md) {
    margin-top: 160px;
  }
}
</style>
