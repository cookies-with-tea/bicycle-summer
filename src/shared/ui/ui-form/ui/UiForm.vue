<template>
  <el-form ref="formRef" class="ui-form" v-bind="$attrs" @submit.prevent="handleFormSubmit">
    <slot />
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { useForm } from '#shared/lib/composables'
import type { UiFormExposeType } from '../types'

// DEBT: Придумать, как типизировать
type Props = {
  action?: () => Promise<unknown>
  onError?: (error: Error) => void
  onSuccess?: (data: any) => void
  errors?: Record<string, string[]>[]
  notification?:
    | {
        title?: string
        message?: string
      }
    | boolean
}

const props = defineProps<Props>()

const formRef = ref<FormInstance>()

const { submit, isLoading } = useForm({
  ref: formRef,
  cb: () => props?.action?.(),
  onError: (error) => {
    props?.onError?.(error)
  },
  onSuccess: (data) => {
    props?.onSuccess?.(data)
  },
  errors: props?.errors,
  notification: props.notification,
})

const handleFormSubmit = async () => {
  await submit()
}

defineExpose<UiFormExposeType>({
  ref: formRef,
  submit: handleFormSubmit,
  isLoading,
})
</script>

<style lang="scss" scoped>
.ui-form {
  :deep(.ui-form-item) {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
