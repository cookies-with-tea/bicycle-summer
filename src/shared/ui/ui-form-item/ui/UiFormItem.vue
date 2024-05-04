<template>
  <el-form-item class="ui-form-item" :prop="props.prop" :error="formErrors[props?.prop ?? '']" v-bind="$attrs">
    <template #default>
      <slot name="default" />
    </template>

    <template #error="{ error }">
      <slot name="error" :error="error">
        <div class="ui-form-item__error">
          <ui-icon class="ui-form-item__error-icon" name="search" />

          <span class="ui-form-item__error-msg">{{ error }}</span>
        </div>
      </slot>
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { UiIcon } from '#shared/ui'
import { useFormErrors } from '#shared/lib/composables'

type Props = {
  prop?: string
}

const props = defineProps<Props>()

const { formErrors } = useFormErrors()
</script>

<style lang="scss" scoped>
.ui-form-item {
  margin-bottom: 20px;

  &__error {
    display: flex;
    line-height: var(--line-height--primary);
    margin-top: 8px;
  }

  &__error-msg {
    font-size: var(--font-size--sm);
    color: var(--color-grey-3);
  }

  &__error-icon {
    font-size: var(--font-size--icon-xs);
    color: var(--el-color-danger);
    margin-right: 8px;
  }

  &.is-error {
    :deep(.el-input__wrapper),
    :deep(.el-textarea__inner) {
      background: var(--color-light-red);
    }

    :deep(.el-upload-dragger) {
      border-color: var(--color-red);
    }

    :deep(.el-input__wrapper) {
      --el-select-border-color-hover: var(--color-red);
      --el-select-input-focus-border-color: var(--color-red);
    }

    :deep(.el-select__wrapper) {
      --el-color-danger: var(--color-red);
      --el-fill-color-blank: var(--color-light-red);
    }

    :deep(.el-checkbox__inner) {
      border-color: var(--color-red);
    }

    :deep(.s-input__label) {
      background-color: var(--color-light-red) !important;
    }

    :deep(.s-date-picker) {
      box-shadow: 0 0 0 1px var(--color-red) inset;
      background: var(--color-light-red);

      .el-input__wrapper {
        box-shadow: none;
        background-color: transparent;
      }
    }
  }

  &.is-required {
    :deep(.s-input__label),
    :deep(.s-select__label),
    :deep(.s-autocomplete__label) {
      &::after {
        content: '*';
      }
    }
  }

  @include responsive(md) {
    margin-bottom: 28px;
  }
}
</style>
