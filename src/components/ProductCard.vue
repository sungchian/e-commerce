<template>
  <div 
    class="group cursor-pointer bg-white rounded-lg border border-gray-200 shadow-orange transition-all duration-300 hover:shadow-orange-lg hover:-translate-y-1"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        :src="image"
        :alt="name"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      <span
        v-if="badge"
        class="absolute top-3 left-3 inline-flex items-center rounded-full bg-orange-500 text-white px-2.5 py-0.5 text-xs font-semibold"
      >
        {{ badge }}
      </span>
      
      <div 
        class="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300"
        :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
      >
        <button class="backdrop-blur-sm inline-flex items-center justify-center rounded-lg text-sm font-medium border border-white bg-white/90 text-gray-700 hover:bg-white transition-colors h-11 px-8">
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          Quick Add
        </button>
      </div>
    </div>

    <div class="p-4 space-y-3">
      <h3 class="font-medium text-gray-900 leading-tight line-clamp-2">
        {{ name }} </h3>
      <h4 class="font-medium text-gray-900 leading-tight line-clamp-2">
        {{ name_cn }} </h4>
      <div class="flex items-center space-x-2">
        <span class="text-lg font-semibold text-gray-900">
          {{ price }}
        </span>
      </div>
      
      <button 
        class="w-full inline-flex items-center justify-center rounded-lg text-sm font-medium bg-[rgb(244,233,225)] text-gray-700 hover:bg-[rgb(238,222,211)] transition-colors duration-300 ease-in-out h-10 px-4 py-2 shadow-orange"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ProductCardProps {
  name: string;
  name_cn: string; // 修正為可選的中文名稱
  price: string; // 價格現在是格式化過的字串
  image: string;
  badge?: string;
}

// 解構 props 以避免 'props' is declared but its value is never read. 錯誤
const { name, name_cn, price, image, badge } = defineProps<ProductCardProps>();

const isHovered = ref(false);

const addToCart = (event: Event) => {
  event.stopPropagation();
  // Add to cart logic
  console.log(`Added "${name}" to cart`);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>