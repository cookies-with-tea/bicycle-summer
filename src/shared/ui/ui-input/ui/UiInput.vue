<template>
  <div :class="inputClasses">
    <label v-if="props?.label" class="ui-input__label"> {{ props.label }} </label>

    <el-input
      ref="inputRef"
      v-model="modelValue"
      :autocomplete="props.autocomplete"
      :autosize="props.autoSize"
      :disabled="props.disabled"
      :type="props.type"
      class="ui-input__inner"
      resize="none"
      v-bind="$attrs"
      @blur="blurHandler"
      @focus="focusHandler"
    >
      <template v-if="props.prefixIcon" #prefix>
        <ui-icon :name="props.prefixIcon" class="ui-input__icon" />
      </template>

      <template v-if="props.suffixIcon" #suffix>
        <ui-icon :name="props.suffixIcon" class="ui-input__icon" />
      </template>

      <template v-if="slots.prepend" #prepend>
        <slot name="prepend" />
      </template>

      <template v-if="slots.append" #append>
        <slot name="append" />
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
// DEBT: Вомзожно, потребуются доработки с фокусом и блюром.
import type { InputInstance } from 'element-plus'

import { UiIcon } from '#shared/ui'
import type { IconNamesType } from '#shared/ui/ui-icon'
import type { UiInputExposeType } from '#shared/ui/ui-input'

type Props = {
  appearance?: 'primary' | 'secondary'
  label?: string
  suffixIcon?: IconNamesType
  prefixIcon?: IconNamesType
  type?: 'text' | 'password' | 'textarea' | 'number'
  autocomplete?: InputInstance['autocomplete']
  autoSize?:
    | {
        minRows?: number
        maxRows?: number
      }
    | boolean
  disabled?: boolean
  class?: string
}

type Slots = {
  prepend?: () => HTMLElement
  append?: () => HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'primary',
  type: 'text',
  autocomplete: 'new-password',
  autoSize: () => ({ minRows: 2 }),
})

const slots = defineSlots<Slots>()

const modelValue = defineModel<string | number>()

const inputRef = ref<InputInstance>()
const el = ref<HTMLInputElement>()

const inputClasses = computed(() => {
  return [
    'ui-input',
    `ui-input--${props.appearance}`,
    `ui-input--${props.appearance}`,
    { 'ui-input--disabled': props.disabled },
    props.class,
  ]
})

onMounted(() => {
  el.value = inputRef.value?.$el.querySelector('input')
})

const focusHandler = () => {
  inputRef.value?.focus()
}

const blurHandler = () => {
  inputRef.value?.blur()
}

defineOptions({
  inheritAttrs: false,
})

defineExpose<UiInputExposeType>({
  focus: focusHandler,
  blur: blurHandler,
  el,
})
</script>

<style lang="scss" scoped>
.ui-input {
  $root: &;
  overflow: hidden;

  width: 100%;

  &__icon {
    font-size: var(--font-size--icon-md);
    color: var(--color-grey-2);
  }

  &__inner {
    --ui-input--padding-horizontal: 16px;
    --el-input-border-radius: 16px;
    --el-input-text-color: var(--color-grey-1);
    --el-input-border-color: transparent;
    --el-input-placeholder-color: var(--color-light-grey);
    --el-input-hover-border-color: var(--color-grey-1);
    --el-input-icon-color: var(--color-grey-1);
    --el-input-bg-color: var(--color-background);
    --el-input-clear-hover-color: var(--color-grey-1);
    --el-input-focus-border-color: var(--color-orange);
    --el-disabled-bg-color: var(--color-grey-3);
    --el-disabled-border-color: var(--color-grey-3);
    --el-disabled-text-color: var(--color-grey-2);

    :deep(.el-icon) {
      font-size: var(--font-size--icon-md);
    }

    :deep(.el-input__inner) {
      height: 58px;
    }

    :deep(.el-textarea__inner) {
      padding: var(--ui-input--padding-horizontal);
    }

    :deep(.el-input__inner),
    :deep(.el-textarea__inner) {
      @include text-desk-mob-16;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    :deep(.el-input__inner) {
      height: 56px;
      grid-area: main;
    }

    :deep(.el-input__wrapper) {
      display: grid;
      grid-template-areas: 'prefix main suffix';
      grid-template-columns: min-content 1fr min-content;
      padding: 0 var(--ui-input--padding-horizontal);
    }

    :deep(.el-input__suffix) {
      grid-area: suffix;

      #{$root}__icon {
        margin-left: 10px;
      }
    }

    :deep(.el-input__prefix) {
      grid-area: prefix;

      #{$root}__icon {
        margin-right: 10px;
      }
    }

    :deep(.el-input-group__prepend),
    :deep(.el-input-group__append) {
      padding: 0;
    }

    :deep(.el-input-group__prepend) {
      > *:last-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    :deep(.el-input-group__append) {
      > *:first-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    &.is-disabled {
      #{$root}__label {
        color: var(--color-grey-2);
      }
    }
  }

  &--secondary {
    #{$root}__inner {
      --el-input-placeholder-color: var(--color-grey-2);
      --el-input-text-color: var(--color-grey-3);
      --el-input-bg-color: var(--color-black);
      --el-input-border-color: var(--color-grey-1);
      --el-input-border-radius: 5px;
      --el-input-icon-color: var(--color-grey-2);
      --el-input-focus-border-color: var(--color-grey-3);
    }
  }
}
</style>
