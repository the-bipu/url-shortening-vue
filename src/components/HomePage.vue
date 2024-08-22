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
          <input type="text" v-model="requestedUrl" placeholder="Shorten a link here..."
            class="h-14 w-10/12 rounded-lg bg-white indent-4 outline-none">
          <button class="w-2/12 bg-[#29D1D1] rounded-lg min-h-14 font-bold text-white" @click="shortenUrl">Shorten
            It!</button>
        </div>
      </div>
      <button class="w-2/12 bg-[#29D1D1] rounded-lg min-h-14 font-bold text-white" @click="getData">Shorten
        It!</button>

      <div class='h-16 w-10/12 flex items-center justify-between pl-8 pr-4 bg-white rounded' v-if="apiResult">
        <div class="md:w-8/12 w-full flex items-start font-semibold text-xl">
          <a href="requestedUrl" target="_blank">{{ requestedUrl }}</a>
        </div>
        <div class="flex flex-row items-center justify-between md:w-4/12 w-full">
          <div class="text-[#29D1D1] font-semibold text-xl">
            <a href="apiResult.result_url" target="_blank">{{ apiResult.result_url }}</a>
          </div>
          <button class="font-semibold py-2 bg-[#29D1D1] text-white rounded px-6" v-if="!isCopied">Copy</button>
          <button class="font-semibold py-2 bg-[#29D1D1] text-white rounded px-6" v-if="isCopied">Copied</button>
        </div>
      </div>

      <div class="w-10/12 flex flex-col mt-32 items-center justify-center">
        <p class="text-5xl font-bold text-[#232127]">Advanced Statistics</p>
        <p class="text-lg md:w-6/12 w-full my-4 text-[#9C9DA2]">
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>

        <div class="flex flex-row gap-7 justify-between items-center text-left">

          <div class="bg-white min-w-80 p-6 pt-16 pb-10 rounded-md relative">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-brand-recognition.svg" alt="">
            </div>
            <div class="mb-8 text-xl font-bold">Brand Recognition</div>
            <div class="text-[#969698]">Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</div>
          </div>

          <div class="bg-white min-w-80 p-6 pt-16 pb-10 mt-10 rounded-md relative">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-detailed-records.svg" alt="">
            </div>
            <div class="mb-8 text-xl font-bold">Detailed Records</div>
            <div class="text-[#969698]">Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</div>
          </div>

          <div class="bg-white min-w-80 p-6 pt-16 pb-10 mt-20 rounded-md relative">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-fully-customizable.svg" alt="">
            </div>
            <div class="mb-8 text-xl font-bold">Fully Customizable</div>
            <div class="text-[#969698]">Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</div>
          </div>

        </div>

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
  },
  data() {
    return {
      isCopied: false,
      requestedUrl: '',
      apiResult: null,
    };
  },
  methods: {
    async shortenUrl() {
      if (!this.requestedUrl) {
        alert('Please enter a URL.');
        return;
      }
      const API_KEY = process.env.API_KEY;

      try {
        const response = await fetch(
          `https://tinyurl.com/api-create.php?url=${this.requestedUrl}&api_key=${API_KEY}`
        );

        if (response.ok) {
          const shortenedUrl = await response.text();
          console.log('Shortened URL:', shortenedUrl);

          this.apiResult = shortenedUrl;
        } else {
          throw new Error('Failed to shorten URL');
        }

      } catch (error) {
        console.error('Error shortening URL', error);
      }
    },
    copyResult() {
      navigator.clipboard.writeText(this.apiResult.result_url);
      this.isCopied = true;
    },
  },
};
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
