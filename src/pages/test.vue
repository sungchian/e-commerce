<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import { supabase } from "@/supabase";

interface Product {
  id: string;
  name: string;
  name_cn: string;
  price: number;
  category_name: string;
  description: string;
  image_url: string;
  badge?: string;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
  value: string;
  display_order: number;
  parent_category_id?: string | null;
}

interface CategoryWithChildren extends Category {
  children?: Category[];
}

const allProducts = ref<Product[]>([]);
const allCategories = ref<Category[]>([]);
const viewMode = ref<"grid" | "list">("grid");
const selectedParentCategory = ref("");
const selectedCategory = ref("all");
const sortBy = ref("newest");
const loadingProducts = ref(true);
const error = ref<string | null>(null);

const fetchData = async () => {
  loadingProducts.value = true;
  error.value = null;

  try {
    // 產品查詢
    const { data: productsData, error: productsError } = await supabase
      .from("products")
      .select("*");
    if (productsError) throw productsError;
    allProducts.value = productsData as Product[]; // 分類查詢 (全部撈，前端再切)

    const { data: categoriesData, error: categoriesError } = await supabase
      .from("categories")
      .select("id, name, value, parent_category_id, display_order")
      .order("display_order", { ascending: true });
    if (categoriesError) throw categoriesError;
    allCategories.value = categoriesData as Category[];
  } catch (err: any) {
    error.value = "資料載入失敗，請稍後再試。";
    allProducts.value = [];
    allCategories.value = [];
  } finally {
    loadingProducts.value = false;
  }
};

// 主分類（parent_category_id 為 null）
const parentCategories = computed<CategoryWithChildren[]>(() => {
  return allCategories.value
    .filter((cat) => !cat.parent_category_id)
    .map((parent) => ({
      ...parent,
      children: allCategories.value.filter(
        (child) => child.parent_category_id === parent.id
      ),
    }));
});

// 產品根據選擇分類動態過濾
const filteredProducts = computed(() => {
  let products = [...allProducts.value]; // 僅限所選主分類/子分類
  const selectedParent = parentCategories.value.find(
    (p) => p.id === selectedParentCategory.value
  );
  if (selectedCategory.value !== "all") {
    products = products.filter(
      (p) => p.category_name === selectedCategory.value
    );
  } else if (selectedParentCategory.value) {
    // 如果主分類但沒有特定子分類，取得所有主分類底下的子分類名稱
    const subCats = (selectedParent?.children ?? []).map((c) => c.name);
    products = products.filter((p) => subCats.includes(p.category_name));
  } // 排序
  switch (sortBy.value) {
    case "price-low":
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      products.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      products.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      break;
  }
  return products;
});

// 切換主分類時，把子分類自動歸零
watch(selectedParentCategory, () => {
  selectedCategory.value = "all";
});

onMounted(fetchData);
</script>