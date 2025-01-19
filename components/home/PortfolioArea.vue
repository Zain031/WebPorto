<script setup>
import portfolio_img_1 from "~/assets/images/projects/1.png";
import portfolio_img_2 from "~/assets/images/projects/work2.jpg";
import portfolio_img_3 from "~/assets/images/projects/work3.jpg";
import portfolio_img_4 from "~/assets/images/projects/2.png";
import portfolio_img_5 from "~/assets/images/projects/work5.jpg";
import portfolio_img_6 from "~/assets/images/projects/6.png";
import portfolio_img_7 from "~/assets/images/projects/3.png";
import portfolio_img_8 from "~/assets/images/projects/4.png";
import portfolio_img_9 from "~/assets/images/projects/5.png";
import portfolio_img_10 from "~/assets/images/projects/14.png";
import portfolio_img_11 from "~/assets/images/projects/15.png";
import portfolio_img_12 from "~/assets/images/projects/16.png";
import portfolio_img_13 from "~/assets/images/projects/17.png";
import portfolio_img_14 from "~/assets/images/projects/18.png";
import portfolio_img_15 from "~/assets/images/projects/19.png";
import portfolio_img_16 from "~/assets/images/projects/20.png";
import portfolio_img_17 from "~/assets/images/projects/s1.jpeg";
import portfolio_img_18 from "~/assets/images/projects/s2.jpeg";
import portfolio_img_19 from "~/assets/images/projects/s3.jpeg";
import portfolio_img_20 from "~/assets/images/projects/s4.jpeg";
import portfolio_img_21 from "~/assets/images/projects/s5.png";
import portfolio_img_22 from "~/assets/images/projects/s6.png";
import portfolio_img_23 from "~/assets/images/projects/s7.png";
import portfolio_img_24 from "~/assets/images/projects/s8.png";
import portfolio_img_25 from "~/assets/images/projects/s9.png";
import portfolio_img_26 from "~/assets/images/projects/s10.png";
import portfolio_img_27 from "~/assets/images/projects/s11.jpg";
import portfolio_img_28 from "~/assets/images/projects/s12.png";


const portfolio_data = [
    {
        id: 12,
        img: portfolio_img_12,
        category: "GIS",
        title: "Slope Gradient",
        link: "",
    },
    {
        id: 13,
        img: portfolio_img_13,
        category: "GIS",
        title: "Mangrove Ecotourism",
        link: "",
    },
    {
        id: 14,
        img: portfolio_img_14,
        category: "GIS",
        title: "Land Use",
        link: "",
    },
    {
        id: 15,
        img: portfolio_img_15,
        category: "GIS",
        title: "Vegetation Density",
        link: "",
    },
    {
        id: 16,
        img: portfolio_img_16,
        category: "GIS",
        title: "Land Surface Temerature",
        link: "",
    },

    {
        id: 10,
        img: portfolio_img_10,
        category: "Mechine Learning",
        title: "Fish Life Prediction",
        link: "https://github.com/Zain031/Fish-Life-Prediction/blob/development/flp.ipynb",
    },
    {
        id: 11,
        img: portfolio_img_11,
        category: "Mechine Learning",
        title: "Water Quality Prediction",
        link: "https://github.com/Zain031/Water-Quality-Predict/blob/development/notebook.ipynb",
    },
    {
        id: 1,
        img: portfolio_img_1,
        category: "Software development",
        title: "Company Profile",
        link: "https://topazmaritime.co.id/",
    },

    {
        id: 4,
        img: portfolio_img_4,
        category: "Software development",
        title: "Course Aplication",
        link: "https://pintarlabs.web.app/"
    },

    {
        id: 7,
        img: portfolio_img_7,
        category: "Software development",
        title: "Restaurant Application",
        link: "https://zainufirdaus.web.app/",
    },
    {
        id: 8,
        img: portfolio_img_6,
        category: "Software development",
        title: "Company Profile",
        link: "https://risharchery.com/",
    },
    {
        id: 9,
        img: portfolio_img_9,
        category: "Software development",
        title: "Contant Management System",
        link: "https://mts-pesri-kendari.sch.id/",
    },
    {
        id: 17,
        img: portfolio_img_17,
        category: "Certificate",
        title: "Web Development",
        link: "",
    },      {
        id: 18,
        img: portfolio_img_18,
        category: "Certificate",
        title: "Responsive Web",
        link: "",
    },      {
        id: 19,
        img: portfolio_img_19,
        category: "Certificate",
        title: "CSS & Javascript",
        link: "",
    },      {
        id: 21,
        img: portfolio_img_20,
        category: "Certificate",
        title: "HTML & CSS",
        link: "",
    },      {
        id: 22,
        img: portfolio_img_21,
        category: "Certificate",
        title: "Project Management",
        link: "",
    },      {
        id: 23,
        img: portfolio_img_22,
        category: "Certificate",
        title: "CSS",
        link: "",
    },      {
        id: 24,
        img: portfolio_img_23,
        category: "Certificate",
        title: "Full Stack Javascript",
        link: "",
    },      {
        id: 25,
        img: portfolio_img_24,
        category: "Certificate",
        title: "JavaScript",
        link: "",
    },      {
        id: 26,
        img: portfolio_img_25,
        category: "Certificate",
        title: "React JS",
        link: "",
    },      {
        id: 27,
        img: portfolio_img_26,
        category: "Certificate",
        title: "PostgreSQL",
        link: "",
    },      {
        id: 28,
        img: portfolio_img_27,
        category: "Certificate",
        title: "WebGis Development",
        link: "",
    },       {
        id: 2,
        img: portfolio_img_28,
        category: "Certificate",
        title: "Data Science(Python)",
        link: "",
    },  
       
];

const categories = [
    "All",
    ...new Set(portfolio_data.map((item) => item.category)),
];

const activeCategory = ref("All");
const items = ref(portfolio_data);

const filterItems = (cateItem) => {
    activeCategory.value = cateItem;

    if (cateItem === "All") {
        items.value = portfolio_data;
    } else {
        const findItems = portfolio_data.filter(
            (findItem) => findItem.category === cateItem
        );
        items.value = findItems;
    }
};

const props = defineProps({
    cls: String,
});

import { ref } from "vue";
import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const image_popup = ref(null);

function handleImagePopup(index) {
    image_popup.value.showImg(index);
}
</script>

<template>
    <div>
        <section id="portfolio" :class="`portfolio-area ${props.cls}`">
            <div class="container">
                <div class="container-inner">
                    <div class="row" style="padding-bottom: 2rem;">
                        <div class="col-xl-12 col-lg-12">
                            <div
                                class=" text-center wow fadeInUp delay-0-2s"
                            >
                            <h2 class="section-title" style="font-size: 3rem;">Works & Projects</h2>

                                <p>
                                    I focus on developing solutions based on Geographic Information Systems (GIS), applying Machine Learning techniques, and software development to solve real-world problems. With a background in Geography and experience in programming technologies, I utilize GIS for spatial analysis and visualization of complex geographic data, while integrating Machine Learning to create more advanced prediction models and analyses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ul
                        class="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s"
                    >
                        <li v-for="(item, i) in categories" :key="i">
                            <a
                                @click="filterItems(item)"
                                :class="`${
                                    item === activeCategory ? 'current' : ''
                                }`"
                            >
                                <span>{{ item }}</span>
                            </a>
                            {{ " " }}
                        </li>
                    </ul>
                    <div class="row project-masonry-active">
                        <div
                            v-for="(item, i) in items"
                            :key="i"
                            class="col-lg-4 col-md-6 item branding game"
                        >
                            <div
                                class="project-item style-two wow fadeInUp delay-0-3s"
                            >
                                <div class="project-image">
                                    <img :src="item.img" alt="Project" />
                                    <a
                                        v-if="item.link"
                                        style="cursor: pointer"
                                        :href="item.link"
                                        class="details-btn"
                                    >
                                        <i class="ri-arrow-right-up-line"></i>
                                    </a>
                                </div>

                                <div class="project-content">
                                    <span class="sub-title">{{
                                        item.category
                                    }}</span>
                                    <h3>
                                        <NuxtLink :to="item.link">{{
                                            item.title
                                        }}</NuxtLink>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- image popup start -->
        <!-- <ImagePopup
            ref="image_popup"
            :images="portfolio_data.map((item) => item.img)"
        /> -->
        <!-- image popup end -->
    </div>
</template>
