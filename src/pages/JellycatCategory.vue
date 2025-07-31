<template>
  <div class="min-h-screen bg-white">
    <Header />

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
              <option value="all">所有產品</option>
              <option v-for="category in categories" :key="category.value" :value="category.name">
                {{ category.name }}
              </option>
            </select>

            <select v-model="sortBy" class="w-48 flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="featured">精選</option>
              <option value="price-low">價格: 低到高</option>
              <option value="price-high">價格: 高到低</option>
              <option value="newest">最新</option>
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

    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <p class="text-gray-600">
            顯示 {{ filteredProducts.length }} 項產品
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
              :price="`$${product.price}`"
              :image="product.image_url"
              :badge="product.badge"
            />
            <div v-if="viewMode === 'list'" class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <p class="text-sm text-gray-600">{{ product.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="inline-flex items-center justify-center rounded-lg text-base font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors h-12 px-8">
            載入更多產品
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProductCard from '@/components/ProductCard.vue';
import { supabase } from '@/supabase'; // 引入 Supabase 客戶端

// ------------------------------------
// 定義數據介面，匹配 Supabase 資料庫結構
// ------------------------------------
interface Product {
  id: string; // Supabase 自動生成的 UUID
  name: string;
  price: number;
  category_name: string; // 數據庫中是 category_name (例如 '兔子系列')
  description: string;
  image_url: string; // 數據庫中是 image_url
  badge?: string;
  sizes: string[]; // 數據庫中是 TEXT[]
  created_at: string; // PostgreSQL 的 TIMESTAMP WITH TIME ZONE 會以 ISO 格式返回
}

interface Category {
  id: string;
  name: string; // 例如 '兔子系列'
  value: string; // 例如 'jellycat-bunnies'
  display_order: number;
  parent_category_id?: string;
}

interface FilterOption {
  value: string;
  name: string;
}

// ------------------------------------
// 組件狀態
// ------------------------------------
const viewMode = ref<'grid' | 'list'>('grid');
const selectedCategory = ref('all'); // 用於篩選下拉選單，'all' 表示所有產品
const sortBy = ref('newest');         // 用於排序，預設為最新

const allJellycatProducts = ref<Product[]>([]); // 儲存從 Supabase 獲取的所有 Jellycat 產品
const categories = ref<FilterOption[]>([]);      // 儲存從 Supabase 獲取的分類列表 (用於篩選下拉選單)

const loadingProducts = ref(true); // 載入狀態
const loadingCategories = ref(true);

// ------------------------------------
// 數據獲取邏輯
// ------------------------------------
const fetchProducts = async () => {
  loadingProducts.value = true;
  let query = supabase.from('products').select('*');

  // 篩選 Jellycat 系列產品 (基於 category_name)
  // 這裡篩選 category_name 存在於 'categories' 表格中，且其 'parent_category_id' 指向 'jellycat' 主分類的產品。
  // 這需要一個更複雜的 JOIN 或分步查詢，但 Supabase 的 .in() 或 .or() 可以模擬部分行為。
  // 最直接的方式是直接列出所有 Jellycat 子分類的名稱。
  query = query.or('category_name.eq.兔子系列,category_name.eq.動物系列,category_name.eq.植物系列,category_name.eq.食物系列,category_name.eq.Little系列,category_name.eq.巴賽羅雄系列,category_name.eq.吊飾系列,category_name.eq.絕版品系列');

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching Jellycat products:', error);
    allJellycatProducts.value = [];
  } else {
    allJellycatProducts.value = data as Product[];
  }
  loadingProducts.value = false;
};

const fetchCategories = async () => {
  loadingCategories.value = true;
  const { data, error } = await supabase
    .from('categories')
    .select('id, name, value, parent_category_id, display_order') // 確保 select 所有的欄位
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    categories.value = [];
  } else {
    const categoriesData = data as Category[]; // 類型斷言

    // 獲取 Jellycat 主分類的 ID
    const jellycatMainCategory = categoriesData.find((cat: Category) => cat.value === 'jellycat');

    if (jellycatMainCategory) {
      // 過濾出所有父分類是 'jellycat' 的子分類
      categories.value = categoriesData
        .filter((cat: Category) => cat.parent_category_id === jellycatMainCategory.id)
        .map((cat: Category) => ({ value: cat.name, name: cat.name })); // 使用 name 作為 value 和 name
    } else {
      categories.value = [];
      console.warn('Jellycat main category not found in Supabase. Please ensure a category with value "jellycat" exists.');
    }
  }
  loadingCategories.value = false;
};

onMounted(() => {
  fetchProducts();
  fetchCategories();
});

// ------------------------------------
// 計算屬性用於篩選和排序
// ------------------------------------
const filteredProducts = computed(() => {
  let products = [...allJellycatProducts.value]; // 複製一份，避免直接修改原始數據

  // 1. 類別篩選
  if (selectedCategory.value !== 'all') {
    products = products.filter(product => product.category_name === selectedCategory.value);
  }

  // 2. 排序
  switch (sortBy.value) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    case 'featured':
    default:
      // 如果有 badge 或其他 'featured' 標誌，可以在這裡進一步排序
      // 這裡簡單保持原始順序或預設順序
      break;
  }

  return products;
});

// 可選：如果你希望篩選或排序條件改變時重新獲取數據，可以使用 watch
// 但對於這種只在前端進行篩選的場景，computed 屬性已經足夠
/*
watch([selectedCategory, sortBy], () => {
  // 如果需要基於篩選條件發送新的 Supabase 查詢，可以在這裡調用 fetchProducts
  // 否則，computed 屬性會自動響應這些 ref 的變化
});
*/
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, hsl(35 45% 92%), hsl(12 60% 95%));
}
</style>