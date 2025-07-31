<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase'; // 引入 Supabase 實例
import ProductCard from './ProductCard.vue';
// 您現在不需要 UiButton，因為您選擇了直接使用 HTML button
// import { Button as UiButton } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  category_name: string;
  description: string;
  image_url: string;
  badge?: string;
  sizes: string[];
  created_at: string; // 確保有 created_at 欄位用於排序
}

const featuredProducts = ref<Product[]>([]);
const newArrivals = ref<Product[]>([]);

onMounted(async () => {
  // 獲取精選產品 (例如 badge 為 'Bestseller' 或 'Popular' 的產品)
  // 如果有多個 badge 條件，可以使用 .in() 方法，或者進行 OR 邏輯查詢
  const { data: featuredData, error: featuredError } = await supabase
    .from('products')
    .select('*')
    .or('badge.eq.Bestseller,badge.eq.Popular') // 查詢 badge 是 Bestseller 或 Popular 的
    .limit(4); // 限制數量

  if (featuredError) {
    console.error('Error fetching featured products:', featuredError);
  } else {
    featuredProducts.value = featuredData as Product[];
  }

  // 獲取新品 (根據 created_at 倒序排序取最新)
  const { data: newArrivalsData, error: newArrivalsError } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false }) // 按照創建時間最新排序 (descending)
    .limit(2); // 限制數量

  if (newArrivalsError) {
    console.error('Error fetching new arrivals:', newArrivalsError);
  } else {
    newArrivals.value = newArrivalsData as Product[];
  }
});
</script>

<template>
  <section class="py-16 bg-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-heading font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p class="text-muted-foreground">
              Our most loved items, handpicked just for you
            </p>
          </div>
          <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium border border-border bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground h-12 px-8">
            View All
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :name="product.name"
            :price="`$${product.price.toFixed(2)}`"
            :image="product.image_url"
            :badge="product.badge"
          />
        </div>
      </div>

      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-heading font-bold text-foreground mb-2">
              New Arrivals
            </h2>
            <p class="text-muted-foreground">
              Fresh additions to bring more joy to your collection
            </p>
          </div>
          <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium border border-border bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground h-12 px-8">
            See All New
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          <div v-for="product in newArrivals" :key="product.id" class="lg:col-span-3">
            <ProductCard
              :name="product.name"
              :price="`$${product.price.toFixed(2)}`"
              :image="product.image_url"
              :badge="product.badge"
            />
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="relative rounded-2xl overflow-hidden secondary-gradient p-8 h-80">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-heading font-bold text-foreground mb-2">
                Jellycat Collection
              </h3>
              <p class="text-muted-foreground mb-4">
                Discover our curated selection of the softest, most loveable plushies
              </p>
            </div>
            <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium primary-gradient text-white font-semibold shadow-soft hover:shadow-hover hover:-translate-y-0.5 self-start h-12 px-8">
              Shop Jellycat
            </button>
          </div>
          <div class="absolute top-4 right-4 w-32 h-32 opacity-20">
            <img
              src="@/assets/jellycat-bunny.jpg"
              alt="Jellycat"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden bg-accent p-8 h-80">
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-heading font-bold text-accent-foreground mb-2">
                American Snacks
              </h3>
              <p class="text-accent-foreground/70 mb-4">
                Taste the best flavors from across America, delivered to your door
              </p>
            </div>
            <button class="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-card hover:shadow-soft self-start h-12 px-8">
              Explore Snacks
            </button>
          </div>
          <div class="absolute top-4 right-4 w-32 h-32 opacity-20">
            <img
              src="@/assets/american-snacks.jpg"
              alt="American Snacks"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Assuming secondary-gradient, primary-gradient and other custom styles are defined in your global CSS */
.secondary-gradient {
  background-image: linear-gradient(to right top, #f7d1d1, #f5b9c5, #ef9ec4, #e582c3, #d766c5);
}
.primary-gradient {
  background-image: linear-gradient(to right top, #a6f7d4, #87f5d0, #67f2cc, #46f0c8, #23edc4);
}
</style>