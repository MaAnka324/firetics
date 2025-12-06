import { ref, computed } from 'vue'

export function useVirtualList<T>(items: () => T[], itemHeight: number, viewportHeight: number) {
  const scrollTop = ref<number>(0)

  const totalHeight = computed(() => items().length * itemHeight)

  const startIndex = computed(() => Math.floor(scrollTop.value / itemHeight))
  const endIndex = computed(() =>
    Math.min(items().length, startIndex.value + Math.ceil(viewportHeight / itemHeight))
  )

  const visibleItems = computed(() =>
    items().slice(startIndex.value, endIndex.value)
  )

  const topPadding = computed(() => startIndex.value * itemHeight)
  const bottomPadding = computed(
    () => totalHeight.value - topPadding.value - visibleItems.value.length * itemHeight
  )

  function onScroll(e: Event) {
    const target = e.target as HTMLElement
    scrollTop.value = target.scrollTop
  }

  return {
    startIndex,
    endIndex,
    visibleItems,
    topPadding,
    bottomPadding,
    totalHeight,
    onScroll,
  }
}
