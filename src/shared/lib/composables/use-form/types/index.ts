import type { FormInstance } from 'element-plus'
import type { Ref } from 'vue'

export type UseFormOptionsType = {
  ref: Ref<FormInstance | undefined>
  cb?: any
  onError?: (error: Error) => void
  onSuccess?: (data: any) => void
  errors?: Array<Record<string, Array<string>>>
  notification?:
    | {
        title?: string
        message?: string
      }
    | boolean
}
