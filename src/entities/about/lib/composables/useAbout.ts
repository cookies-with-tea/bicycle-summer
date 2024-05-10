import { aboutApi, type AboutResponseType } from '#entities/about'

const aboutData = useState<AboutResponseType | undefined>('aboutData', () => undefined)

export const useAbout = () => {
  const getAboutData = async () => {
    const data = await aboutApi.getOne()

    if (data.data) {
      aboutData.value = data.data
    }
  }

  onUnmounted(() => {
    aboutData.value = undefined
  })

  return {
    aboutData,

    getAboutData,
  }
}
