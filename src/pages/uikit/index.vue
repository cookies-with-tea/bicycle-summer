<template>
  <div class="uikit-page">
    <nuxt-link :to="{ name: ROUTES.ABOUT.name }">About</nuxt-link>

    <h1>Текст h1</h1>
    <h2>Текст h2</h2>

    <h3 class="bebas">Текст h1 Bebas</h3>
    <h4 class="bebas">Текст h2 Bebas</h4>

    <div class="box">
      <ui-icon name="bike" />

      <ui-icon name="arrow" />
    </div>

    <div class="box">
      <ui-form
        ref="formRef"
        notification
        :model="formData"
        :rules="rules"
        :action="userApi.getMe"
        :on-success="getData"
        :on-error="onError"
      >
        <ui-form-item prop="name">
          <el-input v-model="formData.name" placeholder="Hi" />
        </ui-form-item>

        <el-button native-type="submit" :loading="formRef?.isLoading" class="mt-12"> Отправить </el-button>
      </ui-form>
    </div>

    <div class="box">
      <ui-pagination :page="pagination.page" :total="pagination.total" :limit="pagination.limit" />
    </div>

    <div class="box">
      <ui-button class="mr-24 mb-12" appearance="primary">Подробнее</ui-button>
      <ui-button class="mr-24 mb-12" appearance="secondary">Подробнее</ui-button>
      <ui-button class="mr-24 mb-12" appearance="text">Сбросить фильтры</ui-button>
      <ui-button class="mr-24 mb-12" appearance="primary" disabled>Подробнее</ui-button>
      <ui-button :as="NuxtLink" :to="{ name: ROUTES.ABOUT.name }" appearance="primary">Подробнее</ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userApi, type UserType } from '#entities/user'
import { FORM_RULES, ROUTES } from '#shared/constants'
import { UiForm, UiFormItem, UiIcon, type UiFormInstanceType, UiPagination, type PaginationType } from '#shared/ui'
import type { FormRules } from 'element-plus'
import UiButton from '#shared/ui/ui-button/ui/UiButton.vue'
import { NuxtLink } from '#components'
const formRef = ref<UiFormInstanceType>()

const rules: FormRules = {
  name: FORM_RULES.required,
}

const formData = ref({
  name: '',
})
const pagination = ref<PaginationType>({
  page: 1,
  limit: 10,
  total: 100,
})

const getData = async (data: UserType) => {
  console.log('[INFO]: UPDATE DATA', data)
}

const onError = (error: Error) => {
  console.log('[ERROR]: GET ERROR', error)
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px dashed #a652fc;
  padding: 12px;
  width: fit-content;
  margin: 12px;
}

.flex {
  display: flex;
}

.bebas {
  font-family: $font-beba;
}
</style>
