<template>
  <lazy-el-form-item class="ui-form-item" :prop="props?.prop" :error="formErrors[props?.prop ?? '']" v-bind="$attrs">
    <template #default>
      <slot name="default" />
    </template>

    <template #error="{ error }">
      <slot name="error" :error="error">
        <div class="ui-form-item__error">
          <ui-icon class="ui-form-item__error-icon" name="close-circle" />

          <span class="ui-form-item__error-message">{{ error }}</span>
        </div>
      </slot>
    </template>
  </lazy-el-form-item>
</template>

<script setup lang="ts">
import { UiIcon } from '#shared/ui'
import { useFormErrors } from '#shared/ui/ui-form/composables'

type Props = {
  prop?: string
}

const props = defineProps<Props>()

const { formErrors } = useFormErrors()
</script>

<style lang="scss" scoped>
// DEBT: Когда будут добавлены компоненты и стили, нужно будет переписать стили
.ui-form-item {
  margin-bottom: 8px;
  width: 100%;

  :deep(.el-form-item__content) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__error {
    display: flex;
    line-height: var(--line-height--primary);
    margin-top: 4px;
    align-items: center;
  }

  &__error-message {
    font-size: var(--font-size--sm);
    color: var(--color-red);
  }

  &__error-icon {
    font-size: 12px;
    color: var(--el-color-danger);
    margin-right: 4px;
  }

  &.is-error {
    // :deep(.el-input__wrapper),
    // :deep(.el-textarea__inner) {
    //   background: var();
    // }

    :deep(.el-upload-dragger) {
      border-color: var(--color-red);
    }

    :deep(.el-input__wrapper) {
      --el-select-border-color-hover: var(--color-red);
      --el-select-input-focus-border-color: var(--color-red);
    }

    :deep(.el-select__wrapper) {
      --el-color-danger: var(--color-red);
      // --el-fill-color-blank: var();
    }

    :deep(.el-checkbox__inner) {
      border-color: var(--color-red);
    }

    // :deep(.ui-input__label) {
    //   background-color:
    // }

    :deep(.ui-date-picker) {
      box-shadow: 0 0 0 1px var(--color-red) inset;
      background: var(--color-light-red);

      .el-input__wrapper {
        box-shadow: none;
        background-color: transparent;
      }
    }
  }

  &.is-required {
    :deep(.ui-input__label),
    :deep(.ui-select__label),
    :deep(.ui-autocomplete__label) {
      &::after {
        content: '*';
      }
    }
  }

  @include responsive(md) {
    margin-bottom: 16px;
  }
}
</style>
