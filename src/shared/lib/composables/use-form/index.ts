import type { UseFormOptionsType } from '#shared/lib/composables/use-form/types'
import { useFormErrors } from '#shared/lib/composables'

export const useForm = (options: UseFormOptionsType) => {
  const { setFormErrors } = useFormErrors()

  const isFormInit = ref(false)
  const isLoading = ref(false)
  const isValid = ref(false)

  watch(
    () => options.ref.value,
    (value) => {
      if (value) {
        isFormInit.value = true
      }
    },
    { deep: true }
  )

  const submit = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    isValid.value = await options!.ref.value!.validate()!

    if (!isValid.value) {
      return {
        isValid: false,
        isLoading: false,
        submit,
      }
    }

    isLoading.value = true

    if (options.cb) {
      const response = await options.cb()

      setFormErrors([
        {
          email: ['Обязательное поле'],
        },
      ])
    }

    isLoading.value = false
  }

  return {
    isValid,
    isLoading,
    submit,
  }
}
