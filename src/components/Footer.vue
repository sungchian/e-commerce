<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Newsletter Section -->
      <div class="py-12 border-b border-gray-200">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Stay in the loop
          </h3>
          <p class="text-gray-600 mb-6">
            Be the first to know about new arrivals, special offers, and exclusive collections
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 h-11 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-1 h-11 px-8 shadow-orange-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="space-y-4">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.172 3.245 1.179-6.873L2.25 9.755l6.9-1.002L12 2.25l2.85 6.503 6.9 1.002-4.757 4.867 1.179 6.873z" />
                </svg>
              </div>
              <span class="text-xl font-bold text-gray-900">
                Lovable
              </span>
            </router-link>
            <p class="text-sm text-gray-600">
              Bringing joy through curated collections of Jellycat plushies and American snacks. 
              Every purchase is a step towards happiness.
            </p>
          </div>

          <!-- Shop Links -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/jellycat" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Jellycat Collection
                </router-link>
              </li>
              <li>
                <router-link to="/american-snacks" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  American Snacks
                </router-link>
              </li>
              <li>
                <router-link to="/new" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  New Arrivals
                </router-link>
              </li>
              <li>
                <router-link to="/bestsellers" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Best Sellers
                </router-link>
              </li>
              <li>
                <router-link to="/sale" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Sale Items
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Customer Service -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Customer Service</h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/contact" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Contact Us
                </router-link>
              </li>
              <li>
                <router-link to="/shipping" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Shipping Info
                </router-link>
              </li>
              <li>
                <router-link to="/returns" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Returns & Exchanges
                </router-link>
              </li>
              <li>
                <router-link to="/faq" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link to="/size-guide" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Size Guide
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Company</h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/about" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </router-link>
              </li>
              <li>
                <router-link to="/reviews" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Customer Reviews
                </router-link>
              </li>
              <li>
                <router-link to="/privacy" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </router-link>
              </li>
              <li>
                <router-link to="/terms" class="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Terms of Service
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="py-6 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-600">
            © 2024 Lovable. All rights reserved.
          </div>
          <div class="flex items-center space-x-6">
            <div class="text-sm text-gray-600">
              Secure payments with SSL encryption
            </div>
            <div class="flex items-center space-x-2">
              <div class="text-xs text-gray-600">Trusted by</div>
              <div class="text-xs font-semibold text-gray-900">500+ customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No imports needed
</script>

<style scoped>
</style> 