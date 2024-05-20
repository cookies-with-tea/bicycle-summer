import { APPLICATION_INFO_MOCK_DATA } from '#entities/application'

import { useFakeFetch } from '#shared/api'

const getOne = async () => {
  return useFakeFetch(
    '/api/v1/app/info',
    {
      method: 'get',
    },
    APPLICATION_INFO_MOCK_DATA
  )
}

export const appliactionApi = {
  getOne,
}
