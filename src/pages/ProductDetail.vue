<template>
  <div class="min-h-screen bg-white">
    <Header />
    <section class="bg-gradient-to-br from-orange-50 to-yellow-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="flex-1 flex justify-center">
            <img :src="product.image" :alt="product.name" class="rounded-xl shadow-lg w-80 h-80 object-cover bg-white" />
          </div>
          <div class="flex-1 space-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">{{ product.name }}</h1>
            <div class="flex items-center gap-2">
              <span class="text-xl font-semibold text-orange-500">${{ product.price.toFixed(2) }}</span>
              <span v-if="product.badge" class="ml-2 inline-block rounded-full bg-yellow-100 text-yellow-800 text-xs px-3 py-1 font-semibold">{{ product.badge }}</span>
            </div>
            <div class="flex items-center gap-1">
              <template v-for="i in 5" :key="i">
                <svg v-if="i <= product.rating" class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
                <svg v-else class="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
              </template>
              <span class="ml-2 text-sm text-gray-600">({{ product.ratingCount }} reviews)</span>
            </div>
            <p class="text-gray-600">{{ product.description }}</p>
            <div class="flex gap-4 mt-8">
              <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange-lg">
                Add to Cart
              </button>
              <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import americanSnacks from '@/assets/american-snacks.jpg'

// Mock product data (replace with real data/fetch in real app)
const product = ref({
  id: 1,
  name: "Reese's Peanut Butter Cups",
  price: 4.99,
  image: americanSnacks,
  badge: "Bestseller",
  rating: 5,
  ratingCount: 128,
  description: "Classic peanut butter and chocolate combination. Beloved by snack lovers everywhere!"
})
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, hsl(35 45% 92%), hsl(12 60% 95%));
}
</style> 