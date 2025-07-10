<template>
  <section class="relative bg-gradient-to-br from-orange-50 to-pink-50 min-h-[600px] flex items-center overflow-hidden">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center opacity-10"
      :style="{ backgroundImage: `url(${heroImage})` }"
    />
    
    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Joy in
              <span class="block text-orange-500">Every Purchase</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-lg">
              From the softest Jellycat plushies to the most delicious American snacks, 
              we bring happiness to your doorstep with every lovingly curated product.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange-lg">
              Shop Jellycat Collection
            </button>
            <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-12 px-8 shadow-orange">
              Explore American Snacks
            </button>
          </div>

          <!-- Stats -->
          <div class="flex items-center space-x-8 pt-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-500">500+</div>
              <div class="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-500">100+</div>
              <div class="text-sm text-gray-600">Unique Products</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-500">4.9★</div>
              <div class="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative lg:order-last animate-float">
          <div class="relative">
            <img
              :src="heroImage"
              alt="Lovable collection of Jellycat plushies and American snacks"
              class="w-full h-auto rounded-2xl shadow-xl"
            />
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '@/assets/hero-image.jpg'
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, hsl(35 45% 92%), hsl(12 60% 95%));
}

.primary-gradient {
  background: linear-gradient(135deg, hsl(12 88% 65%), hsl(25 85% 70%));
}

.shadow-hover {
  box-shadow: 0 8px 30px -8px hsl(12 88% 65% / 0.25);
}

.shadow-soft {
  box-shadow: 0 4px 20px -4px hsl(12 88% 65% / 0.15);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style> 