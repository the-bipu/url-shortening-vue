<template>

    <!-- Navbar is styled here -->
    <div class="w-10/12 md:flex hidden flex-row items-center justify-between py-8">
        <div class="flex flex-row gap-10 items-center justify-center">
            <img src="../assets/images/logo.svg" alt="">
            <div class="flex flex-row gap-8 items-center">
                <div class="pointer">Features</div>
                <div class="pointer">Pricing</div>
                <div class="pointer">Resources</div>
            </div>
        </div>
        <div class="flex flex-row gap-8 items-center justify-center">
            <div class="pointer">Login</div>
            <div class="font-semibold py-2 bg-[#29D1D1] text-white rounded-full px-6 transition-all hover:bg-[#29d1d1bb] pointer">Sign Up</div>
        </div>
    </div>
    <div class="w-10/12 md:hidden flex flex-col py-8 relative">
        <div class="w-full flex flex-row items-center justify-between">
            <img src="../assets/images/logo.svg" alt="">
            <img src="../assets/bars.svg" alt="" @click="toggleMenu">
        </div>

        <div v-if="isMenu"
            class=" w-full h-auto rounded-lg z-[1000] flex flex-col gap-4 bg-[#3A3053] text-white font-semibold text-base absolute top-20 p-6">
            <div>Features</div>
            <div>Pricing</div>
            <div>Resources</div>
            <hr />
            <div>Login</div>
            <div class="font-semibold py-2 bg-[#29D1D1] text-white rounded-full px-6">Sign Up</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'NavbarCmp',
    data() {
        return {
            isMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenu = !this.isMenu;
        },
    },
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>