import type { AboutResponseType, SocialNetworksResponseTypeType } from '#entities/about'
import { ABOUT_MOCK_DATA, SOCIAL_NETWORKS_MOCK_DATA } from '#entities/about'

import { useFakeFetch } from '#shared/api'

const getOne = async () => {
  return await useFakeFetch<AboutResponseType>(
    '/api/v1/about',
    {
      method: 'get',
    },
    ABOUT_MOCK_DATA,
    0
  )
}

const getSocialNetworks = async () => {
  return await useFakeFetch<SocialNetworksResponseTypeType>(
    '/api/v1/about/social-networks',
    {
      method: 'get',
    },
    SOCIAL_NETWORKS_MOCK_DATA,
    0
  )
}

export const aboutApi = {
  getOne,
  getSocialNetworks,
}
