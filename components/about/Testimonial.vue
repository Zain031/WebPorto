
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper/modules";

</script> 


<template>
  <section class="testimonials-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <p>Testinomials</p>
              <h2>What clients say!</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <Swiper
              :slidesPerView="2"
              :spaceBetween="30"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :modules="[Navigation, EffectFade]"
              :navigation="{
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
              }"
              class="testimonials-wrap"
            >
              <!-- START SINGLE TESTIMONIALS DESIGN AREA -->
              <SwiperSlide class="testimonial-item wow fadeInUp delay-0-3s">
                <div class="author">
                  <img
                    src="assets/images/testimonials/author1.jpg"
                    alt="Author"
                  />
                </div>
                <div class="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </div>
                <div class="testi-des">
                  <h5>Zonathon Doe</h5>
                  <span>CEO & Founder X</span>
                </div>
              </SwiperSlide>
              <!-- / END SINGLE TESTIMONIALS DESIGN AREA -->
              <!-- START SINGLE TESTIMONIALS DESIGN AREA -->
              <SwiperSlide class="testimonial-item wow fadeInUp delay-0-4s">
                <div class="author">
                  <img
                    src="assets/images/testimonials/author2.jpg"
                    alt="Author"
                  />
                </div>
                <div class="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </div>
                <div class="testi-des">
                  <h5>Liana Marie</h5>
                  <span>Lead Designer Meta</span>
                </div>
              </SwiperSlide>
              <!-- / END SINGLE TESTIMONIALS DESIGN AREA -->
              <!-- START SINGLE TESTIMONIALS DESIGN AREA -->
              <SwiperSlide class="testimonial-item wow fadeInUp delay-0-2s">
                <div class="author">
                  <img
                    src="assets/images/testimonials/author1.jpg"
                    alt="Author"
                  />
                </div>
                <div class="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </div>
                <div class="testi-des">
                  <h5>Zonathon Doe</h5>
                  <span>CEO & Founder X</span>
                </div>
              </SwiperSlide>
              <!-- / END SINGLE TESTIMONIALS DESIGN AREA -->
              <!-- START SINGLE TESTIMONIALS DESIGN AREA -->
              <SwiperSlide class="testimonial-item wow fadeInUp delay-0-4s">
                <div class="author">
                  <img
                    src="assets/images/testimonials/author2.jpg"
                    alt="Author"
                  />
                </div>
                <div class="text">
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </div>
                <div class="testi-des">
                  <h5>Liana Marie</h5>
                  <span>Lead Designer Meta</span>
                </div>
              </SwiperSlide>
              <!-- / END SINGLE TESTIMONIALS DESIGN AREA -->
            </Swiper>
            <div
              class="slider-arrows wow fadeInUp delay-0-6s text-center pt-40"
            >
              <button class="testimonial-prev arrow">
                <i class="ri-arrow-left-s-line"></i>
              </button>
              <button class="testimonial-next arrow">
                <i class="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

 