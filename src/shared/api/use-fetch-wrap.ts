import type { AvailableRouterMethod, NitroFetchOptions, NitroFetchRequest } from 'nitropack'

import type { AsyncDataOptions } from '#app/composables'

type ResponseType<T> = {
  data: T
  errors: Array<Record<string, Array<string>>>
  messages: Array<string>
}

type FetchWrapOptionsType<T = unknown> = {
  url: string
  fetchOptions?: NitroFetchOptions<NitroFetchRequest & AvailableRouterMethod<string>>
  dataOptions?: AsyncDataOptions<ResponseType<T>>
}

export const useFetchWrap = async <T = unknown>(
  url: FetchWrapOptionsType['url'],
  fetchOptions?: FetchWrapOptionsType<T>['fetchOptions'],
  dataOptions?: AsyncDataOptions<ResponseType<T>>
) => {
  const uniqueKey = url

  const runtimeConfig = useRuntimeConfig()

  const baseUrl =
    process.env.NODE_ENV === 'production' || process.server ? runtimeConfig.public.env.NUXT_VUE_APP_BASE_URI : ''

  return useAsyncData<ResponseType<T>, ResponseType<T>, ResponseType<T>>(
    uniqueKey,
    () =>
      $fetch<ResponseType<T>>(uniqueKey, {
        baseURL: baseUrl,
        method: 'get',
        responseType: 'json',
        ...(fetchOptions ? fetchOptions : {}),
        headers: useRequestHeaders(['cookie']),
      }),
    {
      ...(dataOptions ? dataOptions : {}),
    }
  )
}
