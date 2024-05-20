import type { ApplicationInfoType } from '#entities/application'
import { appliactionApi } from '#entities/application/api'

export const useApplication = () => {
  const applicationInfo = useState<ApplicationInfoType | null>(() => null)

  const getApplicationInfoData = async () => {
    const data = await appliactionApi.getOne()

    if (data.data) {
      applicationInfo.value = data.data
    }
  }

  return {
    getApplicationInfoData,
    applicationInfo,
  }
}
