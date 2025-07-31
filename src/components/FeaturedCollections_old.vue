<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Featured Products -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p class="text-gray-600">
              Our most loved items, handpicked just for you
            </p>
          </div>
          <button 
            class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 h-12 px-8 shadow-orange transition-colors transition-transform duration-300 ease-in-out hover:bg-[rgb(238,222,211)]"
            @click="viewAllProducts"
          >
            View All
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="(product, index) in featuredProducts" 
            :key="index" 
            v-bind="product" 
          />
        </div>
      </div>

      <!-- New Arrivals -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              New Arrivals
            </h2>
            <p class="text-gray-600">
              Fresh additions to bring more joy to your collection
            </p>
          </div>
          <button 
            class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 h-12 px-8 shadow-orange transition-colors transition-transform duration-300 ease-in-out hover:bg-[rgb(238,222,211)]"
            @click="viewAllNew"
          >
            See All New
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          <div 
            v-for="(product, index) in newArrivals" 
            :key="index" 
            class="lg:col-span-3"
          >
            <ProductCard v-bind="product" />
          </div>
        </div>
      </div>

      <!-- Category Showcase -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Jellycat Section -->
        <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 p-8 h-80">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Jellycat Collection
              </h3>
              <p class="text-gray-600 mb-4">
                Discover our curated selection of the softest, most loveable plushies
              </p>
            </div>
            <button 
              class="self-start inline-flex items-center justify-center rounded-lg text-base font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange-lg"
              @click="navigateToJellycat"
            >
              Shop Jellycat
            </button>
          </div>
          <div class="absolute top-4 right-4 w-32 h-32 opacity-20">
            <img
              :src="jellycatBunny"
              alt="Jellycat"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <!-- American Snacks Section -->
        <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100 p-8 h-80">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                American Snacks
              </h3>
              <p class="text-gray-600 mb-4">
                Taste the best flavors from across America, delivered to your door
              </p>
            </div>
            <button 
              class="self-start inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange"
              @click="navigateToSnacks"
            >
              Explore Snacks
            </button>
          </div>
          <div class="absolute top-4 right-4 w-32 h-32 opacity-20">
            <img
              :src="americanSnacks"
              alt="American Snacks"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'
import jellycatBunny from '@/assets/jellycat-bunny.jpg'
import jellycatElephant from '@/assets/jellycat-elephant.jpg'
import americanSnacks from '@/assets/american-snacks.jpg'

const router = useRouter()

const featuredProducts = [
  {
    name: "Jellycat Bashful Bunny - Cream",
    price: "$24.99",
    image: jellycatBunny,
    badge: "Bestseller",
  },
  {
    name: "Jellycat Elly Elephant - Medium",
    price: "$32.99",
    image: jellycatElephant,
    badge: "New",
  },
  {
    name: "American Snack Mix Bundle",
    price: "$19.99",
    image: americanSnacks,
    badge: "Popular",
  },
  {
    name: "Jellycat Bashful Bunny - Sage",
    price: "$24.99",
    image: jellycatBunny,
  },
]

const newArrivals = [
  {
    name: "Limited Edition Holiday Bunny",
    price: "$34.99",
    image: jellycatBunny,
    badge: "Limited",
  },
  {
    name: "Gourmet Candy Collection",
    price: "$28.99",
    image: americanSnacks,
    badge: "New",
  },
]

const viewAllProducts = () => {
  // Navigate to all products
}

const viewAllNew = () => {
  // Navigate to new arrivals
}

const navigateToJellycat = () => {
  router.push('/jellycat')
}

const navigateToSnacks = () => {
  router.push('/american-snacks')
}
</script> 