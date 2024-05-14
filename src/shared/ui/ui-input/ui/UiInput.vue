<template>
  <div class="ui-input">
    <span class="ui-input__title" v-if="props.title"> {{ props.title }} </span>
    <input class="ui-input__inner" type="text" placeholder="Hi" v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title?: string
}

const props = defineProps<Props>()
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
    border-radius: 10px;
    padding: 16px;

    &:hover {
      background-color: var(--color-background-hover);
    }

    &:focus {
      border: 1px solid var(--color-light-grey);
      background-color: var(--color-white);
      padding: 15px;
    }
  }
}
</style>
