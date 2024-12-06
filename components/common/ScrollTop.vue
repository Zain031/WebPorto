

<script setup>

const isSticky = ref(false);

const handleSticky = () => {
  if (window.scrollY > 200) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

 
// import { ref, onMounted, onBeforeUnmount } from 'vue';

// const progressPath = ref(null);
// const pathLength = ref(0);

// const updateProgress = () => {
//   const scroll = window.scrollY;
//   const height = document.documentElement.scrollHeight - window.innerHeight;
//   const progress = pathLength.value - (scroll * pathLength.value / height);
//   progressPath.value.style.strokeDashoffset = progress;
// };

// const scrollToTop = (event) => {
//   event.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };

// onMounted(() => {
//   progressPath.value = document.querySelector('.progress-wrap path');
//   pathLength.value = progressPath.value.getTotalLength();

//   // Set initial styles
//   progressPath.value.style.transition = 'none';
//   progressPath.value.style.strokeDasharray = `${pathLength.value} ${pathLength.value}`;
//   progressPath.value.style.strokeDashoffset = pathLength.value;

//   // Start tracking scroll progress
//   updateProgress();
//   window.addEventListener('scroll', updateProgress);

//   // Handle progress wrap visibility
//   const handleScrollVisibility = () => {
//     if (window.scrollY > 150) {
//       document.querySelector('.progress-wrap').classList.add('active-progress');
//     } else {
//       document.querySelector('.progress-wrap').classList.remove('active-progress');
//     }
//   };

//   window.addEventListener('scroll', handleScrollVisibility);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', updateProgress);
//   window.removeEventListener('scroll', handleScrollVisibility);
// });



</script>


<template>
  <!-- back to top start --> 
  <div :class="`progress-wrap cursor-pointer ${isSticky ? 'active-progress' : ''}`" @click="scrollTop">
    <i class="ri-arrow-up-double-line"></i>
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"  ></path></svg>
  </div>


  <!-- back to top end -->
</template>
 