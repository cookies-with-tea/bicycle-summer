<template>
  <el-form ref="formRef" v-loading="isLoading" class="ui-form" v-bind="$attrs" @submit.prevent="handleFormSubmit">
    <slot />
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { useForm } from '#shared/lib/composables'

const formRef = ref<FormInstance>()

const fetchUsers = async () => {
  return useFetch('https://jsonplaceholder.typicode.com/todos')
}

const { submit, isLoading } = useForm({
  ref: formRef,
  cb: () => fetchUsers(),
})

const handleFormSubmit = () => {
  submit()
}
</script>
