import type { FormInstance } from 'element-plus'
import UiForm from '../ui/UiForm.vue'

export type UiFormExposeType = {
  ref: Ref<FormInstance | undefined>
  submit: () => Promise<void>
  isLoading: Ref<boolean>
}

export type UiFormInstanceType = InstanceType<typeof UiForm>
