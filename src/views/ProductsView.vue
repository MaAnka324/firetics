<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import VirtualList from '@/components/VirtualList.vue'
import ProductItem from '@/components/ProductItem.vue'
import { useProducts } from '@/composables/useProducts'

const { search, load, filtered } = useProducts()

const listHeight = ref(440)

function updateHeight() {
  const h = window.innerHeight
  // reduce default: use 50% of viewport, cap between 240 and 480
  listHeight.value = Math.max(240, Math.min(480, Math.floor(h * 0.5)))
}

onMounted(() => {
  load()
  updateHeight()
  window.addEventListener('resize', updateHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
})
</script>

<template>
  <div class="products-shell">
    <div class="search-wrap">
      <input class="search" v-model="search" placeholder="Search..." />
    </div>

    <div class="list-card">
      <VirtualList
        :items="filtered"
        :itemHeight="100"
        :height="listHeight"
      >
        <template #default="{ item }">
          <ProductItem :item="item" />
        </template>
      </VirtualList>
    </div>
  </div>
</template>

<style scoped>
.products-shell {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.search-wrap {
  padding: 6px 30px 0 0;
}

.search {
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 12px 16px;
  border: none;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  font-size: 16px;
}

.list-card {
  background: #fff;
  border-radius: 14px;
  padding: 8px;
  overflow: hidden;
}

/* target the VirtualList scroll element */
.list-card .scroll {
  border-radius: 10px;
}

</style>
