import type { MaskOptions } from 'maska'

const PATTERNS = {
  digits: /[0-9]/,
  letters: /[a-zA-Zа-яА-ЯёЁ\s]/,
  floatDigits: /[0-9.]+$/,
} as const

export const MASKS = {
  digits: {
    mask: '#',
    tokens: {
      '#': { pattern: PATTERNS.digits, repeated: true },
    },
  } as MaskOptions,
  floatDigits: {
    mask: '#',
    tokens: {
      '#': { pattern: PATTERNS.floatDigits, repeated: true },
    },
  } as MaskOptions,
  phone: {
    mask: '+# (###) ###-##-##',
  },
} as const
