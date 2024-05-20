<template>
  <div :class="inputClasses">
    <span class="ui-input__title" v-if="props.title"> {{ props.title }} </span>
    <el-input class="ui-input__inner" :placeholder='props.placeholder' v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  appearance?: 'primary' | 'secondary'
  title?: string
  placeholder? : string
}

const props = withDefaults(defineProps<Props>(),{
  appearance: 'primary'
})

const inputClasses = computed(() => {
  return ['ui-input', `ui-input--${props.appearance}`]
})
</script>

<style lang="scss" scoped>
.ui-input {
  display: flex;
  flex-direction: column;

  &__title {
    font-family: $font-inter;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 8px;
  }

  &__inner {
    border: none;
    outline: none;
    background-color: var(--color-background);


    &:hover {
      background-color: var(--color-background-hover);
    }

    &:focus {
      border: 1px solid var(--color-light-grey);
      background-color: var(--color-white);
    }
  }

  &--secondary {
    .ui-input {
      color: var(--color-grey-2);
      &__inner {
        background-color: var(--color-black);
        border: 1px solid var(--color-grey-1);

        &:hover {
          background-color: var(--color-dark);
        }

        &:focus {
          border: 1px solid var(--color-light-grey);
          background-color: var(--color-white);
        }
      }
    }
  }

  :deep(.el-input) {
    border-radius: 10px;
    .el-input {
      overflow: hidden;

      &__wrapper {
        padding: 9px 16px;
        border-radius: inherit;
        box-shadow: none;
        background-color: inherit;

      }

      &__inner {
        padding: 0;
        max-height: 26px;
      }
    }
  }
}


</style>
