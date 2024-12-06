<script setup>
// menu sticky
const isSticky = ref(false);
const handleSticky = () => {
    if (window.scrollY > 80) {
        isSticky.value = true;
    } else {
        isSticky.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleSticky);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleSticky);
});

const openMenu = ref(false);
const toggleMenu = () => {
    openMenu.value = !openMenu.value;
};

if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap");
}
</script>

<template>
    <header :class="`main-header ${isSticky ? 'fixed-header' : ''}`">
        <div class="header-upper">
            <div class="container">
                <div class="header-inner d-flex align-items-center">
                    <!-- START LOGO DESIGN AREA -->
                    <!-- <div class="logo-outer">
                        <div class="logo">
                            <NuxtLink to="/">

                                <img
                                    src="~/assets/images/logo.png"
                                    alt="Logo"
                                    title="Logo"
                            />
                            </NuxtLink>
                        </div>
                    </div> -->
                    <!-- / END LOGO DESIGN AREA -->
                    <!-- START NAV DESIGN AREA -->
                    <div class="nav-outer clearfix mx-auto">
                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-lg">
                            <div class="navbar-header">
                                <!-- <div class="mobile-logo">
                                    <NuxtLink to="/">
                                        <img
                                            src="~/assets/images/logo.png"
                                            alt="Logo"
                                            title="Logo"
                                        />
                                    </NuxtLink>
                                </div> -->
                                <!-- Toggle Button -->
                                <button
                                    type="button"
                                    :class="`navbar-toggle ${
                                        openMenu ? 'collapsed' : ''
                                    }`"
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse"
                                    @onclick="toggleMenu"
                                >
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div
                                :class="`navbar-collapse collapse ${
                                    openMenu ? 'show' : ''
                                }`"
                            >
                                <ul class="navigation onepage clearfix">
                                    <li>
                                        <NuxtLink class="nav-link-click" to="/"
                                            >Home</NuxtLink
                                        >
                                    </li>
                                    <!-- <li>
                                        <NuxtLink
                                            class="nav-link-click"
                                            to="/about"
                                            >about</NuxtLink
                                        >
                                    </li> -->
                                    <!-- <li>
                                        <NuxtLink
                                            class="nav-link-click"
                                            to="/service"
                                            >services</NuxtLink
                                        >
                                    </li> -->
                                    <li>
                                        <NuxtLink
                                            class="nav-link-click"
                                            to="/works"
                                            >works</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink
                                            class="nav-link-click"
                                            to="/contact"
                                            >Contact</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <!-- / END NAV DESIGN AREA -->
                    </div>
                    <!-- <div class="menu-btns">
                        <NuxtLink to="/contact" class="theme-btn contact-btn"
                            >Hire Me<i class="ri-shake-hands-line"></i
                        ></NuxtLink>
                    </div> -->
                </div>
            </div>
        </div>
    </header>
</template>
