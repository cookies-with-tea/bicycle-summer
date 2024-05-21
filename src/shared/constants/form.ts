import type { FormRules } from 'element-plus'

export const RULES = {
  req: { required: true, message: 'Обязательное поле', trigger: 'blur' },
} as const

export const FORM_RULES: FormRules = {
  required: [RULES.req],
}
