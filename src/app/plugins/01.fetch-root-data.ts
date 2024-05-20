import { useApplication } from '#entities/application'

export default defineNuxtPlugin(async () => {
  const { getApplicationInfoData } = useApplication()

  await Promise.allSettled([getApplicationInfoData()])
})
