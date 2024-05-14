import type { SwiperOptions } from 'swiper/types'

import type { AboutResponseType, SocialNetworksResponseTypeType } from '#entities/about'
import { aboutApi } from '#entities/about'

const breakpoints: SwiperOptions['breakpoints'] = {
  320: {
    slidesPerView: 'auto',
    spaceBetween: 8,
  },
  768: {
    spaceBetween: 16,
  },
  1200: {
    spaceBetween: 40,
  },
  1440: {
    spaceBetween: 40,
  },
}

const aboutData = useState<AboutResponseType | undefined>('aboutData', () => undefined)
const socialNetworks = useState<SocialNetworksResponseTypeType>('socialNetworks', () => [])

export const useAbout = () => {
  const getAboutData = async () => {
    const data = await aboutApi.getOne()

    if (data.data) {
      aboutData.value = data.data
    }
  }

  const getSocialNetworksData = async () => {
    const data = await aboutApi.getSocialNetworks()

    if (data.data) {
      socialNetworks.value = data.data
    }
  }

  onUnmounted(() => {
    aboutData.value = undefined
  })

  return {
    breakpoints,

    aboutData,
    socialNetworks,

    getAboutData,
    getSocialNetworksData,
  }
}
