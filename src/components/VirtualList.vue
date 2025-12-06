<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Product } from '@/types/Product'
import { useVirtualList } from '@/composables/useVirtualList'

interface Props {
  items: Product[]
  itemHeight: number
  height: number
}
const props = defineProps<Props>()

const listRef = ref<HTMLElement | null>(null)

const {
  visibleItems,
  topPadding,
  bottomPadding,
  onScroll,
} = useVirtualList<Product>(() => props.items, props.itemHeight, props.height)
</script>

<template>
  <div
    ref="listRef"
    class="scroll"
    :style="{ height: props.height + 'px', overflowY: 'auto' }"
    @scroll="onScroll"
  >
    <div :style="{ height: topPadding + 'px' }"></div>

    <div v-for="item in visibleItems" :key="item.id">
      <slot :item="item" />
    </div>

    <div :style="{ height: bottomPadding + 'px' }"></div>
  </div>
</template>
