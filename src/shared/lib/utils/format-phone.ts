import { Mask } from 'maska'

import { MASKS } from '#shared/constants'

export const formatPhone = (params: { phone: string; isWithMask: boolean }): string => {
  const maskPhone = new Mask({
    mask: MASKS.phone.mask,
  })

  return params.isWithMask ? maskPhone.masked(params.phone) : `+${maskPhone.unmasked(params.phone)}`
}
