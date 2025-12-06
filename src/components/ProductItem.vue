<script setup lang="ts">
import type { Product } from '@/types/Product'

defineProps<{ item: Product }>()
</script>

<template>
  <div class="product-item">
    <img :src="item.thumbnail" class="thumb" />

    <div class="meta">
      <h4 class="title">{{ item.title }}</h4>
      <p class="desc">{{ item.description }}</p>

      <div class="row">
        <div class="discount">Discount {{ item.discountPercentage }} %</div>
        <div class="brand">{{ item.brand }}</div>
      </div>
      <div class="row">
        <div class="price">${{ item.price }}</div>
        <div class="rating">★ {{ item.rating }}</div>
        <div class="category">{{ item.category }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 10px 8px;
  border-bottom: 1px solid #f0f0f0;
}

.thumb {
  width: 96px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  background: #f6f6f6;
}

.meta {
  flex: 1;
}

.title {
  margin: 0 0 6px 0;
  font-size: 16px;
  color: #0f3b3a;
}

.desc {
  margin: 0 0 8px 0;
  color: #6b7b80;
  font-size: 13px;
  line-height: 1.2;
  max-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.price {
  color: #1b998b;
  font-weight: 700;
}

.rating {
  background: #fff9e6;
  color: #c47b00;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;

}
.discount {
  color: #e74c3c;
  font-weight: 700;
  font-size: 13px;
}
.brand {
  color: #1b998b;
  font-size: 13px;
  margin-left: 8px;
}
.category {
  background: #e6f7f7;
  color: #0f3b3a;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  margin-left: 8px;
}

</style>
