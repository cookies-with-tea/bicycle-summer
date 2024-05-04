<template>
  <component :is="`ui-${props.name}`" class="a-icon" :class="iconClass" width="1em" height="1em" aria-hidden="true" />
</template>

<script setup lang="ts">
import type { IconNamesType } from '#shared/ui/ui-icon/types'

type Props = {
  name: IconNamesType
  prefix?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
})

const iconClass = computed(() => {
  return [{ 'a-icon--reversed': props.reverse }, `a-icon--${props.name}`]
})
</script>

<style lang="scss" scoped>
.a-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  transition: transform 0.2s;

  &--reversed {
    transform: rotate(180deg);
  }
}
</style>
