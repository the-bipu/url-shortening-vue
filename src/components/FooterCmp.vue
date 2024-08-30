<template>

    <!-- Footer is styled here -->
    <div class="bg-[#232127] w-full flex items-center justify-center py-20">

        <div class="w-10/12 flex md:flex-row flex-col justify-around items-start md:gap-0 gap-10 text-left text-white">
            <img src="../assets/images/logo.svg" alt="" style="filter: brightness(0) invert(1);">

            <div class="flex flex-col gap-3 font-light text-[#BFBFBF]">
                <div class="font-bold mb-2 text-white">Features</div>
                <div class="hover-link">Link Shortening</div>
                <div class="hover-link">Branded Links</div>
                <div class="hover-link">Analytics</div>
            </div>

            <div class="flex flex-col gap-3 font-light text-[#BFBFBF]">
                <div class="font-bold mb-2 text-white">Resources</div>
                <div class="hover-link">Blog</div>
                <div class="hover-link">Developers</div>
                <div class="hover-link">Support</div>
            </div>

            <div class="flex flex-col gap-3 font-light text-[#BFBFBF]">
                <div class="font-bold mb-2 text-white">Company</div>
                <div class="hover-link">About</div>
                <div class="hover-link">Our Team</div>
                <div class="hover-link">Careers</div>
                <div class="hover-link">Contact</div>
            </div>

            <div class="flex flex-row gap-4">
                <img src="../assets/images/icon-facebook.svg" alt="" class="hover-icon">
                <img src="../assets/images/icon-twitter.svg" alt="" class="hover-icon">
                <img src="../assets/images/icon-pinterest.svg" alt="" class="hover-icon">
                <img src="../assets/images/icon-instagram.svg" alt="" class="hover-icon">
            </div>
        </div>

    </div>

</template>

<style scoped>
.hover-icon {
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease;
    cursor: pointer;
}

.hover-icon:hover {
    filter: brightness(0) saturate(100%) invert(68%) sepia(29%) saturate(5077%) hue-rotate(130deg) brightness(101%) contrast(90%);
}

.hover-link {
    transition: 0.2s ease-in-out .2;
    cursor: pointer;
}

.hover-link:hover {
    color: #29D1D1;
    cursor: pointer;
}
</style>