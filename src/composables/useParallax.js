import { computed } from 'vue'
import { useScroll } from '@vueuse/core'

export function useParallax() {
    const windowScroll = useScroll(window)
    const maxBackgroundSize = 114
    const backgroundSize = computed(() => windowScroll.y.value / (maxBackgroundSize - 100))
    return { windowScroll, backgroundSize }
}