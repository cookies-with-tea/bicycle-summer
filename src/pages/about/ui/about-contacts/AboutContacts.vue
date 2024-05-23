<template>
  <section class="about-contacts">
    <div class="container">
      <h2>Контакты</h2>
    </div>

    <ya-map class="about-contacts__map" />

    <div class="about-contacts__info">
      <div class="container">
        <el-row>
          <el-col :span="24" :md="12">
            <div class="about-contacts__shop-info">
              <p class="about-contacts__info-subtitle"> Адрес магазина: </p>

              <p
                v-for="(address, index) in applicationInfo?.addresses"
                :key="index"
                class="about-contacts__shop-info-value"
              >
                {{ address }}
              </p>
            </div>

            <div class="about-contacts__shop-info">
              <p class="about-contacts__info-subtitle"> Телефоны: </p>

              <p v-for="(phone, index) in applicationInfo?.phones" :key="index" class="about-contacts__shop-info-value">
                {{ phone }}
              </p>
            </div>

            <div class="about-contacts__shop-info">
              <p class="about-contacts__info-subtitle"> E-mail: </p>

              <p v-for="(email, index) in applicationInfo?.email" :key="index" class="about-contacts__shop-info-value">
                {{ email }}
              </p>
            </div>
          </el-col>

          <el-col :spam="24" :md="12" class="mt-16 mt-md-0">
            <p class="about-contacts__info-subtitle">Юридическая информация:</p>

            <dl v-for="(info, index) in aboutData?.contacts" :key="index" class="about-contacts__info-item">
              <dt> {{ info.label }}</dt>
              <dd> {{ info.value }} </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { YaMap } from '#widgets/ya-map'

import { useAbout } from '#entities/about'
import { useApplication } from '#entities/application'

const { applicationInfo } = useApplication()
const { aboutData } = useAbout()
</script>

<style lang="scss" scoped>
.about-contacts {
  margin-top: 28px;

  $root: &;

  &__map {
    margin-top: 32px;

    @include responsive(md) {
      margin-top: 80px;
    }
  }

  &__shop-info {
    &:not(:first-child) {
      margin-top: 24px;
    }

    #{$root}__shop-info-value {
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }

  &__info {
    margin-top: 28px;

    @include responsive(md) {
      margin-top: 40px;
    }
  }

  &__info-item {
    @include text-desk-mob-16(300);

    display: flex;
    flex-direction: column;
    margin: 0;

    &:not(:first-child) {
      margin-top: 16px;

      @include responsive(md) {
        margin-top: 8px;
      }
    }

    dt {
      color: var(--color-grey-2);
    }

    dd {
      color: var(--color-black);
      margin: 8px 0 0;

      @include responsive(md) {
        margin: 0;
      }
    }

    @include responsive(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__info-subtitle {
    @include text-desk-mob-18(500);

    margin-bottom: 16px;
  }

  @include responsive(md) {
    margin-top: 40px;
  }
}
</style>
