import type { Ref } from 'vue'

import type { UiInput } from '#shared/ui'

export type UiInputExposeType = {
  focus: () => void
  blur: () => void
  el?: Ref<HTMLInputElement | undefined>
}

export type UiInputInstanceType = InstanceType<typeof UiInput>
