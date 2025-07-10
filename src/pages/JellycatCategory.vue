<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-4">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900">
            Jellycat Collection
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of the softest, most loveable plushies. Each Jellycat is crafted with care to bring comfort and joy to your life.
          </p>
        </div>
      </div>
    </section>

    <!-- Filters and Controls -->
    <section class="py-8 border-b border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div class="flex flex-wrap items-center gap-4">
            <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 transition-colors h-10 px-4 py-2">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
              </svg>
              Filters
            </button>
            
            <select v-model="selectedCategory" class="w-48 flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option v-for="category in categories" :key="category.value" :value="category.value">
                {{ category.label }}
              </option>
            </select>

            <select v-model="sortBy" class="w-48 flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <button
              :class="viewMode === 'grid' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-gray-300 bg-white hover:bg-gray-50'"
              class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors h-9 px-3"
              @click="viewMode = 'grid'"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </button>
            <button
              :class="viewMode === 'list' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-gray-300 bg-white hover:bg-gray-50'"
              class="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors h-9 px-3"
              @click="viewMode = 'list'"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <p class="text-gray-600">
            Showing {{ filteredProducts.length }} products
          </p>
        </div>

        <div 
          class="grid gap-6"
          :class="viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'"
        >
          <div v-for="product in filteredProducts" :key="product.id" class="group">
            <ProductCard
              :name="product.name"
              :price="`$${product.price.toFixed(2)}`"
              :image="product.image"
              :badge="product.badge"
            />
            <div v-if="viewMode === 'list'" class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <p class="text-sm text-gray-600">{{ product.description }}</p>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
          <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors h-12 px-8">
            Load More Products
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'
import jellycatBunny from '@/assets/jellycat-bunny.jpg'

const viewMode = ref<'grid' | 'list'>('grid')
const selectedCategory = ref('all')
const sortBy = ref('featured')

// Mock Jellycat products data
const jellycatProducts = [
  {
    id: 1,
    name: "Jellycat Bashful Bunny - Cream",
    price: 24.99,
    image: jellycatBunny,
    badge: "Bestseller",
    category: "bunny",
    description: "The softest, most cuddly bunny companion. Perfect for children and adults alike."
  },
  {
    id: 2,
    name: "Jellycat Elly Elephant - Medium",
    price: 32.99,
    image: jellycatBunny,
    badge: "New",
    category: "elephant",
    description: "A gentle giant with the softest materials. Ideal for comfort and companionship."
  },
  {
    id: 3,
    name: "Jellycat Bashful Bunny - Sage",
    price: 24.99,
    image: jellycatBunny,
    category: "bunny",
    description: "A calming sage-colored bunny with the signature Jellycat softness."
  },
  {
    id: 4,
    name: "Jellycat Cordy Roy Fox",
    price: 28.99,
    image: jellycatBunny,
    badge: "Popular",
    category: "fox",
    description: "A charming fox with a distinctive tail and friendly expression."
  },
  {
    id: 5,
    name: "Jellycat Bashful Bunny - Pink",
    price: 24.99,
    image: jellycatBunny,
    category: "bunny",
    description: "A sweet pink bunny that brings warmth and comfort to any space."
  },
  {
    id: 6,
    name: "Jellycat Large Huge Dragon",
    price: 45.99,
    image: jellycatBunny,
    badge: "Limited Edition",
    category: "dragon",
    description: "A magnificent dragon with incredible detail and ultra-soft materials."
  }
]

const categories = [
  { value: "all", label: "All Products" },
  { value: "bunny", label: "Bunnies" },
  { value: "elephant", label: "Elephants" },
  { value: "fox", label: "Foxes" },
  { value: "dragon", label: "Dragons" },
  { value: "other", label: "Other" }
]

const filteredProducts = computed(() => {
  return selectedCategory.value === "all" 
    ? jellycatProducts 
    : jellycatProducts.filter(product => product.category === selectedCategory.value)
})
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, hsl(35 45% 92%), hsl(12 60% 95%));
}
</style> 