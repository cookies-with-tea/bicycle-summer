import type { FormInstance } from 'element-plus'
import type { Ref } from 'vue'

import type { ErrorsResponseType } from '#shared/types'

import UiForm from '../ui/UiForm.vue'

export type UseFormOptionsType = {
  ref: Ref<FormInstance | undefined>
  cb?: () => any
  onError?: (error: Error) => void
  onSuccess?: (data: any) => void
  errors?: ErrorsResponseType
  notification?:
    | {
        title?: string
        message?: string
      }
    | boolean
}

export type UiFormExposeType = {
  ref: Ref<FormInstance | undefined>
  submit: () => Promise<void>
  isLoading: Ref<boolean>
}

export type UiFormInstanceType = InstanceType<typeof UiForm>
