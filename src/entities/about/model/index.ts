import type { BrandType } from '#entities/brand'

export type AboutUsefulType = {
  title: string
  description: string
  slug: string
  uuid: string
}

export type AboutDealerType = {
  title: string
  uuid: string
  slug: string
  brands: Array<BrandType>
}

export type AboutBestDealers = {
  title: string
  items: Array<AboutDealerType>
}

export type AboutHeroType = {
  h2: string
  useful: Array<AboutUsefulType>
}

export type AboutResponseType = {
  h1: string
  hero: AboutHeroType
  best: {
    dealers: AboutBestDealers
  }
}

export type SocialNetworkType = {
  iconName: 'ok' | 'vk' | 'tg' | 'whatsapp' | 'viber'
  link: string
}

export type SocialNetworksResponseTypeType = Array<SocialNetworkType>
