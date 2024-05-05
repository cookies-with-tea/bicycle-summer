import { ROUTE_SEO_DATA } from '#shared/contants'

export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp()

  const name = to?.name

  if (name) {
    nuxtApp.runWithContext(() =>
      useSeoMeta({
        title: ROUTE_SEO_DATA?.[name as keyof typeof ROUTE_SEO_DATA]?.title ?? '',
        description: ROUTE_SEO_DATA?.[name as keyof typeof ROUTE_SEO_DATA]?.description ?? '',
        ogTitle: ROUTE_SEO_DATA?.[name as keyof typeof ROUTE_SEO_DATA]?.ogTitle ?? '',
        ogDescription: ROUTE_SEO_DATA?.[name as keyof typeof ROUTE_SEO_DATA]?.ogDescription ?? '',
      })
    )
  }
})
