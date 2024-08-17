<template>
  <div class="flex w-full h-auto flex-col p-0 items-center justify-center">

    <!-- Navbar is styled here -->
    <div class="w-10/12 flex flex-row items-center justify-between py-8">
      <div class="flex flex-row gap-10 items-center justify-center">
        <img src="../assets/images/logo.svg" alt="">
        <div class="flex flex-row gap-8 items-center">
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
      </div>
      <div class="flex flex-row gap-8 items-center justify-center">
        <div>Login</div>
        <div class="font-semibold py-2 bg-[#29D1D1] text-white rounded-full px-6">Sign Up</div>
      </div>
    </div>

    <div class="w-full flex items-center justify-center relative overflow-hidden">

      <div class="w-10/12 flex flex-row items-center justify-between">
        <div class="flex flex-col gap-8 items-start text-left w-1/2 pt-32 pb-56">
          <div class="text-7xl font-extrabold leading-[80px] text-[#302F35]">More than just shorter links</div>
          <div class="text-xl">Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </div>
          <button class="text-xl font-semibold py-3 bg-[#29D1D1] text-white rounded-full px-6">Get Started</button>
        </div>
        <img src="../assets/images/illustration-working.svg" alt="" class="absolute -right-24 top-10">
      </div>

    </div>


    <div class="w-full bg-[#F0F1F6] flex items-center justify-center flex-col relative py-32">

      <div class="w-10/12 flex flex-row items-center justify-center absolute -top-20">
        <div class="inputSection w-full px-12 min-h-40 rounded-md flex flex-row gap-6 items-center justify-center">
          <input type="text" placeholder="Shorten a link here..."
            class="h-14 w-10/12 rounded-lg bg-white indent-4 outline-none">
          <button class="w-2/12 bg-[#29D1D1] rounded-lg min-h-14">Shorten It!</button>
        </div>
      </div>

      <div class="w-10/12 flex flex-col">
        <p class="text-5xl font-bold text-[#232127]">Advanced Statistics</p>
        <p>
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>

        Brand Recognition

        Boost your brand recognition with each click. Generic links don’t
        mean a thing. Branded links help instil confidence in your content.

        Detailed Records

        Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions.

        Fully Customizable

        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
      </div>
    </div>

    <div class="boostSection w-full h-auto flex flex-col min-h-64 items-center justify-center gap-8">
      <p class="text-5xl font-bold text-white">Boost your links today</p>
      <button class="text-xl font-semibold py-3 bg-[#29D1D1] text-white rounded-full px-6">Get Started</button>
    </div>

    <div class="bg-[#232127] w-full flex items-center justify-center py-20">

      <div class="w-10/12 flex md:flex-row flex-col justify-around items-start text-left text-white">
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
          <div>Contact</div>
        </div>

        <div class="flex flex-row gap-4">
          <img src="../assets/images/icon-facebook.svg" alt="" class="hover-icon">
          <img src="../assets/images/icon-twitter.svg" alt="" class="hover-icon">
          <img src="../assets/images/icon-pinterest.svg" alt="" class="hover-icon">
          <img src="../assets/images/icon-instagram.svg" alt="" class="hover-icon">
        </div>
      </div>

    </div>

    <!-- <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputSection {
  background-image: url(../assets/images/bg-shorten-desktop.svg);
  background-color: #3A3053;
  background-repeat: no-repeat;
  background-size: cover;
}

.boostSection {
  background-image: url(../assets/images/bg-boost-desktop.svg);
  background-color: #3A3053;
  background-repeat: no-repeat;
  background-size: cover;
}

.hover-icon {
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.hover-icon:hover {
  filter: brightness(0) saturate(100%) invert(68%) sepia(29%) saturate(5077%) hue-rotate(130deg) brightness(101%) contrast(90%);
}

.hover-link {
  transition: 0.2s ease-in-out .2;
}

.hover-link:hover {
  color: #29D1D1;
  cursor: pointer;
}
</style>
