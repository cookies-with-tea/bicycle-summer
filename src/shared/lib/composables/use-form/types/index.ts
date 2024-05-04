import type { Ref } from 'vue'
import type { FormInstance } from 'element-plus'

export type UseFormOptionsType = {
  ref: Ref<FormInstance | undefined>
  cb?: any
}
