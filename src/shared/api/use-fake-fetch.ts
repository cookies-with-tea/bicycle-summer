type ResponseType<T> = {
  data: T | null
  errors: Array<Record<string, Array<string>>>
  messages: Array<string>
}

export const useFakeFetch = async <T = unknown>(
  url: string,
  fetchOptions: {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  },
  data: T,
  errorProbability = 0.2
): Promise<ResponseType<T>> => {
  const fakeData: ResponseType<T> = {
    data,
    errors: [
      {
        email: ['Поле должно быть обязательным'],
      },
    ],
    messages: ['Ошибка валидации'],
  }

  const shouldReturnError = Math.random() < errorProbability

  return new Promise((resolve) => {
    setTimeout(() => {
      if (shouldReturnError) {
        resolve({
          data: null,
          errors: fakeData.errors,
          messages: fakeData.messages,
        })
      } else {
        resolve({
          data,
          errors: [],
          messages: [],
        })
      }
    }, 300)
  })
}
