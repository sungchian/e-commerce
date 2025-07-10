<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center space-y-8">
      <div class="space-y-4">
        <h1 class="text-6xl font-heading font-bold text-foreground">404</h1>
        <h2 class="text-2xl font-heading font-bold text-foreground">Page Not Found</h2>
        <p class="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back to exploring our lovely collection.
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link 
          to="/"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Go Home
        </router-link>
        <router-link 
          to="/jellycat"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
        >
          Browse Products
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// NotFound component logic can be added here
</script> 