const formErrors = ref<Record<string, string>>({})

export const useFormErrors = () => {
  const clearFormErrors = () => {
    formErrors.value = {}
  }

  const setFormErrors = (errors: Record<string, string[]>[]) => {
    const newErrors: Record<string, string> = {}

    Object.entries(errors[0]).forEach(([field, errors]) => {
      newErrors[field] = errors[0]
    })

    formErrors.value = newErrors
  }

  return {
    formErrors,
    clearFormErrors,
    setFormErrors,
  }
}
