<template>
  <div v-if="props?.slides?.length" class="ui-slider">
    <swiper slides-per-view="auto" v-bind="$attrs">
      <template v-for="(slide, index) in props.slides" :key="index">
        <swiper-slide v-if="slots?.slide" class="ui-slider__slide">
          <slot name="slide" :slide="slide" />
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script generic="T" lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/pagination'
import 'swiper/css'

type Props = {
  slides?: Array<T>
  fullwidth?: boolean
}

type Slots = {
  slide?: ({ slide }: { slide: T }) => HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  fullwidth: false,
})

const slots = defineSlots<Slots>()

defineOptions({
  inheritAttrs: false,
})
</script>
