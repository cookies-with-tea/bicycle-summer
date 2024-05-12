<template>
  <component :is="props.as" v-bind="$attrs" :class="uiButton">
    <slot v-if="$slots.suffix" name="suffix" />

    <slot />

    <slot v-if="$slots.postfix" name="postfix" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

type Props = {
  as?: 'button' | typeof NuxtLink
  appearance?: 'primary' | 'secondary' | 'text'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  appearance: 'primary',
  size: 'sm',
})

const uiButton = computed(() => {
  return ['ui-button', `ui-button--${props.appearance}`]
})
</script>

<style lang="scss" scoped>
.ui-button {
  font-family: $font-inter;
  font-weight: 500;
  display: inline-flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  padding: 16px 12px;
  text-decoration: none;

  &:hover {
    background-color: var(--color-orange-2);
  }

  &:active {
    background-color: var(--color-orange-3);
  }

  &:disabled {
    background-color: var(--color-orange-4);
    cursor: default;
  }

  &--primary {
    border: none;
    color: var(--color-white);
    background-color: var(--color-orange);
  }

  &--secondary {
    color: var(--color-black);
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-3);

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }

  &--text {
    padding: 16px;
    border: none;
    color: var(--color-grey-2);
    background-color: var(--color-white);
    font-weight: 400;

    &:hover {
      background-color: var(--color-white);
      text-decoration: underline;
    }
  }
}
</style>
