<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <FeaturedCollections />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import FeaturedCollections from '@/components/FeaturedCollections.vue'
import Footer from '@/components/Footer.vue'
</script> 