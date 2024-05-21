// DEBT: Типизировать
const checkScroll = (parallaxElement: any, speed: any) => {
  let parallaxEnabled = false
  const triggerElement = parallaxElement.parentElement

  const updateParallax = () => {
    const triggerOffsetTop = triggerElement.offsetTop
    const offsetY = window.scrollY - triggerOffsetTop

    if (offsetY >= 0 && offsetY <= triggerElement.clientHeight - parallaxElement.clientHeight) {
      parallaxElement.style.transform = `translateY(${offsetY * speed}px)`
    }
  }

  const scrollHandler = () => {
    const triggerOffsetTop = triggerElement.offsetTop

    const isTriggerReached = window.scrollY >= triggerOffsetTop - window.innerHeight

    if (parallaxEnabled !== isTriggerReached) {
      parallaxEnabled = isTriggerReached

      if (parallaxEnabled) {
        window.addEventListener('scroll', updateParallax)
      } else {
        window.removeEventListener('scroll', updateParallax)
      }
    }
  }

  window.addEventListener('scroll', scrollHandler)

  scrollHandler()

  return updateParallax
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', {
    mounted(el, binding) {
      const speed = binding.value?.speed || 0.5

      el.style.position = 'relative'

      el.style.zIndex = '-1'

      const updateParallax = checkScroll(el, speed)

      window.addEventListener('scroll', updateParallax)

      window.removeEventListener('scroll', updateParallax)
    },

    unmounted(el) {
      const updateParallax = el.__updateParallax

      if (updateParallax) {
        window.removeEventListener('scroll', updateParallax)
      }
    },
  })
})
