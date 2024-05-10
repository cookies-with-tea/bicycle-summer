import { ABOUT_MOCK_DATA, type AboutResponseType } from '#entities/about'

import { useFakeFetch } from '#shared/api'

const getOne = async () => {
  return await useFakeFetch<AboutResponseType>(
    '/api/v1/about',
    {
      method: 'get',
    },
    ABOUT_MOCK_DATA,
    0,
  )
}

export const aboutApi = {
  getOne,
}
