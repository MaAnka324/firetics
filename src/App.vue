<script setup lang="ts">
import ProductsView from './views/ProductsView.vue'
</script>

<template>
  <div class="app-bg">
    <div class="center-card">
      <ProductsView />
    </div>
  </div>
</template>

<style>
:root{
  --bg: #76c6bf;
  --card: #ffffff;
  --muted: #6b7b80;
}

html, body {
  height: 100vh;
  overflow: hidden;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: var(--bg);
}

.app-bg {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.center-card {
  width: 520px;
  max-width: calc(100% - 48px);
  background: transparent;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  padding: 12px;
}

.center-card > * {
  width: 100%;
}

</style>
