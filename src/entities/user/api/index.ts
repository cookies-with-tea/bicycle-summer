import { USER_MOCK_DATA } from '../mock'
import type { UserType } from '../model'

const getMe = async (): Promise<UserType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USER_MOCK_DATA)
    }, 500)
  })
}

export const userApi = {
  getMe,
}
