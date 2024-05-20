<template>
  <div :class="inputClasses">
    <span class="ui-input__title" v-if="props.title"> {{ props.title }} </span>
    <div class="ui-input__inner">
      <el-input class="ui-input__input" v-bind="$attrs" >
        <template v-if="slots.suffix" #suffix>
        <span class="ui-input__suffix">
          <slot name="suffix" />
        </span>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  appearance?: 'primary' | 'secondary'
  title?: string
}

type Slots = {
  suffix?: () => HTMLElement
}

const props = withDefaults(defineProps<Props>(),{
  appearance: 'primary'
})

const slots = defineSlots<Slots>()

const inputClasses = computed(() => {
  return ['ui-input', `ui-input--${props.appearance}`]
})
</script>

<style lang="scss" scoped>
//.ui-input {
//  display: flex;
//  flex-direction: column;
//
//  &__title {
//    font-family: $font-inter;
//    font-size: 16px;
//    line-height: 26px;
//    margin-bottom: 8px;
//  }
//
//  &__inner {
//    border: none;
//    outline: none;
//    background-color: var(--color-background);
//
//
//    &:hover {
//      background-color: var(--color-background-hover);
//    }
//
//    &:focus {
//      border: 1px solid var(--color-light-grey);
//      background-color: var(--color-white);
//    }
//  }
//
//  &--secondary {
//    .ui-input {
//      color: var(--color-grey-2);
//      &__inner {
//        background-color: var(--color-black);
//        border: 1px solid var(--color-grey-1);
//
//        &:hover {
//          background-color: var(--color-dark);
//        }
//
//        &:focus {
//          border: 1px solid var(--color-light-grey);
//          background-color: var(--color-white);
//        }
//      }
//    }
//  }
//
//  &__suffix {
//    display: flex;
//    align-items: center;
//    margin: 0;
//
//    :deep(.ui-icon) {
//      font-size: var(--font-size--icon-md);
//    }
//  }
//
//  :deep(.el-input) {
//    &.el-input {
//      &__wrapper {
//        padding: 9px 16px;
//        border-radius: 10px;
//        box-shadow: none;
//        background-color: inherit;
//      }
//
//      &__inner {
//        padding: 0;
//        max-height: 26px;
//      }
//    }
//  }
//}


</style>
