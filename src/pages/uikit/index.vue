<template>
  <div class="uikit-page">
    <h1>Текст h1</h1>
    <h2>Текст h2</h2>

    <div class="box">
      <ui-icon name="bike" />

      <ui-icon name="arrow" />
    </div>

    <div class="box">
      <ui-form :model="formData">
        <ui-form-item prop="email">
          <el-input v-model="formData.text1" placeholder="Hi" />
        </ui-form-item>

        <el-button> Submit </el-button>
      </ui-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UiForm, UiFormItem, UiIcon } from '#shared/ui'

const formData = ref({
  text1: '',
})

useSeoMeta({
  title: 'UiKit',
})
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
</style>
