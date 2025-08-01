<template>
  <div 
    class="group cursor-pointer bg-white rounded-lg border border-gray-200 shadow-orange transition-all duration-300 hover:shadow-orange-lg hover:-translate-y-1"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image Container -->
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        :src="image"
        :alt="name"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      <!-- Badge -->
      <span
        v-if="badge"
        class="absolute top-3 left-3 inline-flex items-center rounded-full bg-orange-500 text-white px-2.5 py-0.5 text-xs font-semibold"
      >
        {{ badge }}
      </span>
      
      <!-- Quick Add Button -->
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

    <!-- Product Info -->
    <div class="p-4 space-y-3">
      <!-- Name -->
      <h3 class="font-medium text-gray-900 leading-tight line-clamp-2">
        {{ name }}
      </h3>
      
      <!-- Rating -->
      <!-- <div class="flex items-center space-x-2">
        <div class="flex items-center">
          <svg v-for="i in 5" :key="i" class="h-3 w-3" :class="i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
          </svg>
        </div>
        <span class="text-xs text-gray-500">
          (4.8)
        </span>
      </div> -->
      <!-- Name_CN -->
      <div class="flex items-center space-x-2">
        <span class="font-medium text-gray-900 leading-tight line-clamp-2">
          {{ name_cn }}
        </span>
      </div>
      
      <!-- Price -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-semibold text-gray-900">
          {{ price }}
        </span>
      </div>
      

      <!-- Add to Cart Button -->
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
import { describe } from 'node:test'
import { ref } from 'vue'

interface ProductCardProps {
  name: string
  name_cn: string
  price: string
  image: string
  badge?: string
}

const { name, image, badge, name_cn } = defineProps<ProductCardProps>();

const isHovered = ref(false)

const addToCart = (event: Event) => {
  event.stopPropagation()
  // Add to cart logic
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 