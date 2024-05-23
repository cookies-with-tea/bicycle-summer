import type { UseFormOptionsType } from '../types'

import { useFormErrors } from './use-form-errors'

const showNotification = (notification: UseFormOptionsType['notification']) => {
  if (typeof notification === 'undefined') return

  if (typeof notification === 'boolean') {
    ElNotification.success({
      title: 'Успешно',
      message: 'Данные успешно отправлены',
    })

    return
  }

  ElNotification.success({
    title: notification.title ?? 'Успешно',
    message: notification.message ?? 'Данные успешно отправлены',
  })
}

export const useForm = (options: UseFormOptionsType) => {
  const { setFormErrors, clearFormErrors } = useFormErrors()

  const isLoading = ref(false)
  const isValid = ref(false)

  const submit = async (): Promise<void> => {
    clearFormErrors()

    isValid.value = (await options?.ref?.value?.validate()) ?? false

    if (!isValid.value) return

    if (options?.cb) {
      isLoading.value = true

      const response = await options.cb()

      isLoading.value = false

      if (response) {
        options?.onSuccess?.(response)

        showNotification(options.notification)

        return
      }

      const errors = options.errors || response.errors || {}

      setFormErrors(errors)
    }
  }

  return {
    isValid,
    isLoading,
    submit,
  }
}
