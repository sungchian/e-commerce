<!-- <template>
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
</style>  -->
<template>
  <Header />
  <div v-if="loading" class="flex items-center justify-center h-72">
    載入中...
  </div>
  <div v-else-if="!product" class="text-center text-red-600 py-12 text-lg">
    查無此商品
  </div>
  <div v-else class="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row gap-10">
      <div class="flex-1 flex items-center justify-center mb-6 md:mb-0">
        <img :src="product.image_url" :alt="product.name" class="w-80 h-80 object-cover rounded-lg shadow" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 leading-tight mb-3">{{ product.name_cn || product.name }}</h1>
          <div class="text-base text-gray-500 mb-4">{{ product.description }}</div>
          <div class="mb-5">
            <span class="font-medium">選擇尺寸</span>
            <div class="flex flex-wrap gap-3 mt-2">
              <template v-for="variant in productVariants" :key="variant.id">
                <button
                  class="px-6 py-2 rounded border hover:border-orange-400 font-semibold text-gray-700 transition
                          hover:bg-orange-50 focus:bg-orange-100 disabled:line-through disabled:opacity-60"
                  :class="{
                    'ring-2 ring-orange-500 border-orange-500 bg-orange-100': variant.id === selectedVariantId,
                  }"
                  :disabled="!variant.in_stock"
                  @click="selectedVariantId = variant.id"
                >
                  {{ variant.size }} <span v-if="!variant.in_stock">(缺貨)</span>
                </button>
              </template>
            </div>
          </div>
          <div class="mt-4 text-2xl text-orange-600 font-bold">
            NT${{ selectedVariant?.price ?? product.price }}
          </div>
        </div>
        <div class="mt-8 flex gap-3">
          <button
            class="flex-1 py-3 rounded-lg bg-orange-500 text-white text-lg font-semibold shadow hover:bg-orange-600 transition disabled:bg-gray-400"
            :disabled="!selectedVariant?.in_stock"
            @click="addToCart"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/supabase';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
const productId = route.params.productId as string;

const loading = ref(true);
const product = ref<any|null>(null);
const productVariants = ref<any[]>([]);
const selectedVariantId = ref('');
const selectedVariant = computed(() => productVariants.value.find(v => v.id === selectedVariantId.value));

// 固定變數
const sizeOrder: Record<string, number> = {
  'Small': 1,
  'Medium': 2,
  'Large': 3,
  'Huge': 4,
  'Really Big': 5,
  'Giant': 6,
};

onMounted(async () => {
  loading.value = true;
  // 主要商品資料
  const { data: prod } = await supabase.from('products').select('*').eq('id', productId).single();
  product.value = prod;
  // variants
  const { data: variants } = await supabase
    .from('product_variants')
    .select('id, product_id, size, stock_count, price, in_stock, image_url')
    .eq('product_id', productId);
  if (!prod) {
  console.error('Supabase查無資料或錯誤:', productId);
}
  // 關鍵：確保 variants 為 array
  productVariants.value = Array.isArray(variants) 
    ? variants.sort((a, b) => (sizeOrder[a.size] || 999) - (sizeOrder[b.size] || 999))
    : [];
  
  // 預選第一個有庫存的，如無則第一筆
  selectedVariantId.value = productVariants.value.find(v => v.in_stock)?.id || (productVariants.value[0]?.id ?? '');
  loading.value = false;
});

function addToCart() {
  if (!selectedVariant.value) return;
  // 此處可整合你的Cart Store/emit給父元件或全局store
  // 建議帶上 product_id, variant_id, 數量=1
  alert(`已加入購物車 (尺寸: ${selectedVariant.value.size})`);
}
</script>

<style scoped>
/* 可根據你的設計微調按鈕、卡片等樣式 */
</style>
