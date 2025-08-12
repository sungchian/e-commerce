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
            :name_cn="product.name_cn"
            :price="`$${product.price}`"
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
              :name_cn="product.name_cn"
              :price="`$${product.price}`"
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase'; // 引入 Supabase 實例
import ProductCard from './ProductCard.vue';

interface Product {
  id: string;
  name: string;
  name_cn: string; // 中文名稱
  price: number;
  category_name: string;
  description: string;
  image_url: string;
  badge?: string;
  created_at: string; // 確保有 created_at 欄位用於排序
  updated_at: string;
}

const featuredProducts = ref<Product[]>([]);
const newArrivals = ref<Product[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    // Step 1: 獲取所有有庫存的產品 ID
    const { data: inStockVariantsData, error: variantsError } = await supabase
      .from('product_variants')
      .select('product_id')
      .gt('stock_count', 0); // 查詢庫存大於0的變體

    if (variantsError) throw variantsError;

    // 從結果中提取並去重產品 ID
    const inStockProductIds = inStockVariantsData.map(v => v.product_id);
    const uniqueInStockProductIds = [...new Set(inStockProductIds)];

    // 如果沒有任何產品有庫存，則直接跳過後續查詢
    if (uniqueInStockProductIds.length === 0) {
      loading.value = false;
      return;
    }

    // Step 2: 查詢精選產品
    const { data: featuredData, error: featuredError } = await supabase
      .from('products')
      .select('id, name, name_cn, price, image_url, badge, category_name, description')
      .in('id', uniqueInStockProductIds) // 只查詢有庫存的產品 ID
      .or('badge.eq.Bestseller,badge.eq.Popular')
      .limit(4);

    if (featuredError) throw featuredError;
    featuredProducts.value = featuredData as Product[];

    // Step 3: 查詢新品
    const { data: newArrivalsData, error: newArrivalsError } = await supabase
      .from('products')
      .select('id, name, name_cn, price, image_url, badge, category_name, description')
      .in('id', uniqueInStockProductIds) // 只查詢有庫存的產品 ID
      .order('created_at', { ascending: false })
      .limit(2);

    if (newArrivalsError) throw newArrivalsError;
    newArrivals.value = newArrivalsData as Product[];

  } catch (err: any) {
    console.error('Error fetching data from Supabase:', err.message);
    error.value = '無法載入產品，請稍後再試。';
    featuredProducts.value = [];
    newArrivals.value = [];
  } finally {
    loading.value = false;
  }
});
</script>