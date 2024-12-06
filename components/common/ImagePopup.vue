<template>
  <div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script> 

import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: { VueEasyLightbox },
  props:{
    images:Array,
  },
  data() {
    return {
      visible: false,
      index: 0,
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>


 

  <!-- <template>
    <div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import VueEasyLightbox from 'vue-easy-lightbox';
  
  defineProps({
    images: Array,
  });
  
  const visible = ref(false);
  const index = ref(0);
  
  function showImg(newIndex) {
    index.value = newIndex;
    visible.value = true;
  }
  
  function handleHide() {
    visible.value = false;
  }
  </script> -->
 