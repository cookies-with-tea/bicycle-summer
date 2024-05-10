export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('ripple', {
    mounted(el, binding) {
      el.__hasRippleEffect = false // Флаг для отслеживания создания кружка

      el.addEventListener('mouseenter', (e) => {
        if (!el.__hasRippleEffect) {
          createRipple(e, binding)

          el.__hasRippleEffect = true // Устанавливаем флаг, чтобы показать, что кружок создан
        }
      })

      el.addEventListener('mouseleave', () => {
        el.__hasRippleEffect = false // Сбрасываем флаг при выходе курсора из элемента

        removeRipple(el)
      })
    },
    unmounted(el) {
      el.removeEventListener('mouseenter', createRipple)

      el.removeEventListener('mouseleave', removeRipple)
    },
  })
})

const createRipple = (e, binding) => {
  const el = e.currentTarget
  const ripple = document.createElement('span')

  ripple.classList.add('ripple')

  const diameter = Math.max(el.clientWidth, el.clientHeight)
  const radius = diameter / 2

  ripple.style.width = `${diameter}px`

  ripple.style.height = `${diameter}px`

  const rect = el.getBoundingClientRect()
  const rippleX = e.clientX - rect.left - radius
  const rippleY = e.clientY - rect.top - radius

  ripple.style.left = `${rippleX}px`

  ripple.style.top = `${rippleY}px`

  if (binding?.value) {
    ripple.style.backgroundColor = binding.value.color || 'rgba(255, 255, 255, 0.4)'
  }

  el.appendChild(ripple)

  setTimeout(() => {
    ripple.remove()
  }, 500)
}

const removeRipple = (el) => {
  el.querySelectorAll('.ripple').forEach((ripple) => ripple.remove())
}
