import type { ApplicationInfoType } from '#entities/application'
import { appliactionApi } from '#entities/application'

import { formatPhone } from '#shared/lib/utils'

const formatPhones = (phones: Array<string>): Array<string> => {
  return phones.map((phone) => formatPhone({ phone, isWithMask: true }))
}

export const useApplication = () => {
  const applicationInfo = useState<ApplicationInfoType | null>(() => null)

  const getApplicationInfoData = async () => {
    const data = await appliactionApi.getOne()

    if (data.data) {
      applicationInfo.value = { ...data.data, phones: formatPhones(data.data.phones) }
    }
  }

  return {
    getApplicationInfoData,
    applicationInfo,
  }
}
