export type AboutUsefulType = {
  title: string
  description: string
  slug: string
  uuid: string
}

export type AboutHeroType = {
  h2: string
  useful: Array<AboutUsefulType>
}

export type AboutResponseType = {
  h1: string
  hero: AboutHeroType
}
