<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-6.172 3.245 1.179-6.873L2.25 9.755l6.9-1.002L12 2.25l2.85 6.503 6.9 1.002-4.757 4.867 1.179 6.873z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">
            JelloJam
          </span>
        </router-link>

        <!-- Navigation-->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            to="/jellycat"
            class="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
          >
            Jellycat
          </router-link>
          <router-link
            to="/american-snacks"
            class="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
          >
            American Snacks
          </router-link>
          <router-link
            to="/new"
            class="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
          >
            New Arrivals
          </router-link>
          <router-link
            to="/bestsellers"
            class="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
          >
            Best Sellers
          </router-link>
        </nav>

        <!-- Search -->
        <div class="hidden lg:flex flex-1 max-w-md mx-8">
          <div class="relative w-full">
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              class="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search for plushies, snacks..."
              type="search"
            />
          </div>
        </div>

        <!-- User Actions -->
        <div class="flex items-center space-x-2">
          <button class="md:hidden inline-flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 h-10 w-10">
            <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 h-10 w-10">
            <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
            </svg>
          </button>
          <button class="relative inline-flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 h-10 w-10">
            <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {{ cartCount }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const cartCount = ref(3)
</script> 