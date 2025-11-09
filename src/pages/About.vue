<template>
  <div class="min-h-screen bg-white">
    <Header />

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-4xl mx-auto space-y-12">
        <section class="space-y-6 text-center">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 font-heading">
            關於 JelloJam
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            歡迎來到 JelloJam，一個充滿愛與歡樂的線上空間。我們是旅居海外的留學生，
            致力於將那些獨特、美好且不易在台灣尋獲的商品，分享給同樣熱愛生活的你。
            JelloJam 的存在，不只是為了販售商品，更是希望透過每一件精心挑選的物品，為您的生活注入更多快樂與驚喜。
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 font-heading">
            我們的獨特品項
          </h2>
          <p class="text-gray-700">
            我們專注於兩個獨特的品項：Jellycat 絨毛玩具和美味的美國零食。Jellycat 不僅僅是玩具，它們是能帶來擁抱、陪伴與治癒的可愛夥伴。每一隻 Jellycat 都以其無可比擬的柔軟手感和獨特個性，在全球擁有了無數忠實的愛好者。同時，我們也為您帶來各式各樣的美國零食，讓您在忙碌之餘，也能透過味蕾體驗來自異國的驚喜與滿足。
          </p>
          <p class="text-gray-700">
            如果您在我們的網站上看到了心儀的商品，我們很樂意為您提供協助。JelloJam 團隊會為您處理從國外採購到安全運送的所有環節，讓您足不出戶，也能輕鬆擁有這些來自遠方的美好。
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 font-heading">
            我們的承諾
          </h2>
          <p class="text-gray-700">
            JelloJam 團隊的每一位成員都懷抱著對品質的堅持與對細節的追求。我們親自挑選每一項產品，確保它們不僅安全、可靠，更能真正為您帶來喜悅。無論您是在尋找一份溫馨的禮物，還是想為自己找點小確幸，我們都希望 JelloJam 能成為您心中最溫暖的購物選擇。
          </p>
        </section>

        <section class="p-8 bg-gray-50 border border-gray-200 rounded-lg space-y-4">
          <h3 class="text-xl font-bold text-gray-800">網站免責聲明</h3>
          <ul class="text-gray-600 space-y-2">
            <li>本網站所展示之所有商品僅作為收藏與參考之用，並不直接提供線上購買或付款服務。若有購買意願，請透過聯絡表單與我們洽詢。</li>
            <li>本網站所提及之品牌名稱與商標，均屬其合法持有人所有。本站與相關品牌官方、代理商或經銷商無任何直接或間接關係，亦未獲得授權。</li>
            <li>所有圖片均為本站自行拍攝，或經合法授權使用，未經同意不得轉載或商業使用。</li>
            <li>本站不對商品的適用性、品質或售後服務提供任何官方保證，購買前請務必自行確認商品資訊。</li>
            <li>本站保留隨時修改、刪除或更新本免責聲明的權利，恕不另行通知。</li>
          </ul>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
/* You can add specific styles here if needed */
</style>