

<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
useHead({
  title: "Service Bentos - Personal Portfolio Nuxt js Template",
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

</script>


<template>
  <div>
    <CommonScrollTop />
    <Header />
    <ServiceArea />
    <ServicePricingArea />     
    <HomeCtaArea />
    <Footer />
  </div>
</template>

 