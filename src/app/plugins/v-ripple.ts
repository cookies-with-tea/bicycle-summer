import type { DirectiveBinding } from 'vue'

type RippleDirectiveOptionsType = {
  color?: string
  isHide?: boolean // default: false
  enabled?: boolean // default: true
}

const createRipple = (e: MouseEvent, binding: DirectiveBinding<RippleDirectiveOptionsType>) => {
  const el = e.currentTarget as HTMLDivElement
  const ripple = document.createElement('span')
  const diameter = Math.max(el.clientWidth, el.clientHeight)
  const radius = diameter / 2
  const rect = el.getBoundingClientRect()
  const rippleX = e.clientX - rect.left - radius
  const rippleY = e.clientY - rect.top - radius

  ripple.classList.add('ripple')

  if (!binding.value?.isHide) {
    ripple.classList.add('no-hide')

    if (el.querySelector('.ripple')) return
  } else {
    ripple.classList.add('hide')
  }

  ripple.style.width = `${diameter}px`

  ripple.style.height = `${diameter}px`

  ripple.style.left = `${rippleX}px`

  ripple.style.top = `${rippleY}px`

  ripple.style.backgroundColor = binding?.value?.color || 'rgba(255, 255, 255, 0.4)'

  el.appendChild(ripple)

  if (binding.value?.isHide) {
    setTimeout(() => {
      ripple.remove()
    }, 600)
  }
}

const removeRipple = (el: HTMLDivElement, binding: DirectiveBinding<RippleDirectiveOptionsType>) => {
  const ripples = el.querySelectorAll('.ripple')

  if (!binding.value?.isHide) {
    ripples.forEach((ripple) => {
      setTimeout(() => {
        ripple.classList.add('before-remove')

        ripple.addEventListener('animationend', () => {
          ripple.remove()
        })
      }, 300)
    })
  } else {
    setTimeout(() => {
      ripples.forEach((ripple) => ripple.remove())
    }, 600)
  }
}

/*
 * DEBT: Добавить multiple
 * Несовместим с isHide: false.
 * Если isHide: true, то при каждом наведении добавляет новый ripple эффект
 * Из-за чего будет небольшое наслоение
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('ripple', {
    mounted(el: HTMLDivElement, binding: DirectiveBinding<RippleDirectiveOptionsType>) {
      if (binding.value?.enabled === false) return

      el.addEventListener('mouseenter', (e) => {
        createRipple(e, binding)
      })

      el.addEventListener('mouseleave', () => {
        removeRipple(el, binding)
      })
    },
    unmounted(el, binding) {
      if (!binding.value?.enabled === false) return

      el.removeEventListener('mouseenter', (e) => createRipple(e, binding))

      el.removeEventListener('mouseleave', () => removeRipple(el, binding))
    },
  })
})
