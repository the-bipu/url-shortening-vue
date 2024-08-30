<template>
  <div class="flex w-full h-auto flex-col p-0 items-center justify-center relative">

    <!-- Navbar is styled here -->
    <NavbarCmp />

    <div class="w-full flex items-center justify-center relative overflow-hidden">

      <div class="w-full flex md:flex-row flex-col-reverse items-center justify-between">
        <div
          class="flex flex-col gap-8 md:items-start items-center md:text-left text-center md:w-1/2 w-11/12 md:pt-32 pt-6 md:pb-56 pb-40 md:pl-32 pl-0">
          <div class="md:text-7xl text-4xl font-extrabold md:leading-[80px] leading-[50px] text-[#302F35]">More than
            just shorter links</div>
          <div class="text-xl text-[#BFBFBF]">Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </div>
          <button class="text-xl font-semibold py-3 bg-[#29D1D1] text-white rounded-full px-6 cursor-pointer hover:bg-[#29d1d1bb] ">Get Started</button>
        </div>
        <div class="md:w-1/2 w-full h-auto relative flex items-center justify-center">
          <img src="../assets/images/illustration-working.svg" alt=""
            class="md:absolute relative md:-right-28 -right-20 md:-bottom-40 bottom-0">
        </div>
      </div>

    </div>


    <div class="w-full bg-[#F0F1F6] flex items-center justify-center flex-col relative py-32">

      <div class="w-10/12 flex flex-row items-center justify-center absolute -top-20">
        <div
          class="inputSection w-full md:px-12 px-4 md:py-0 py-4 md:min-h-40 min-h-auto rounded-md flex md:flex-row flex-col md:gap-6 gap-3 items-center justify-center">
          <div class="md:w-10/12 w-full flex flex-col gap-1">
            <input type="text" v-model="requestedUrl" placeholder="Shorten a link here..."
              :style="{ borderColor: isEmpty ? 'red' : 'transparent' }"
              class="md:h-14 h-12 rounded-lg bg-white indent-4 outline-none border-2">
            <span v-if="isEmpty" class="italic text-sm text-red-400 w-full text-left">Please add a link</span>
          </div>
          <button class="md:w-2/12 w-full bg-[#29D1D1] rounded-lg md:min-h-14 h-12 font-bold text-white"
            @click="shortenUrl">Shorten
            It!</button>
        </div>
      </div>

      <div v-for="(item, index) in shortenedUrls" :key="index"
        class="w-full h-auto flex flex-col items-center justify-center">
        <div
          class='md:h-16 h-auto w-10/12 flex md:flex-row flex-col md:items-center items-start justify-between md:pl-8 pl-0 md:pr-4 pr-0 mb-4 bg-white rounded relative'>
          <div
            class="md:w-7/12 w-full flex items-start font-semibold md:text-xl text-base md:p-0 p-3 md:border-b-0 border-b md:border-transparent border-gray-500">
            <a :href="item.requestedUrl" target="_blank">{{ item.requestedUrl }}</a>
          </div>
          <div
            class="flex md:flex-row flex-col md:gap-4 gap-2 md:items-center items-start md:justify-between justify-start md:w-5/12 w-full md:p-0 p-3">
            <div class="text-[#29D1D1] font-semibold md:text-xl text-base">
              <a :href="item.resultUrl" target="_blank">{{ item.resultUrl }}</a>
            </div>
            <button class="font-semibold py-2 bg-[#29D1D1] text-white rounded px-6 md:w-auto w-full"
              @click="copyToClipboard(item, index)" v-if="!item.isCopied">Copy</button>
            <button class="font-semibold py-2 bg-[#3A3053] text-white rounded px-6 md:w-auto w-full"
              v-if="item.isCopied">Copied</button>
            <button class="font-semibold bg-[#03030356] text-white rounded-full absolute -right-2 w-6 h-6 -top-2"
              @click="clearInput(index)">x</button>
          </div>
        </div>
      </div>

      <div class="w-10/12 flex flex-col md:mt-32 mt-10 items-center justify-center">
        <p class="md:text-5xl text-3xl font-bold text-[#232127]">Advanced Statistics</p>
        <p class="md:text-lg text-base md:w-6/12 w-full my-4 text-[#9C9DA2] md:mb-4 mb-20">
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </p>

        <div class="flex md:flex-row flex-col gap-7 justify-between items-center text-left relative">

          <div class="md:h-2 h-full md:w-full w-2 bg-[#29D1D1] absolute md:mt-8 mt-0"></div>

          <div
            class="bg-white min-w-80 p-6 pt-16 pb-10 rounded-md relative flex md:items-start items-center justify-center flex-col">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-brand-recognition.svg" alt="">
            </div>
            <div class="mb-5 text-xl font-bold">Brand Recognition</div>
            <div class="text-[#969698] md:text-left text-center">Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</div>
          </div>

          <div
            class="bg-white min-w-80 p-6 pt-16 pb-10 mt-16 rounded-md relative flex md:items-start items-center justify-center flex-col">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-detailed-records.svg" alt="">
            </div>
            <div class="mb-5 text-xl font-bold">Detailed Records</div>
            <div class="text-[#969698] md:text-left text-center">Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</div>
          </div>

          <div
            class="bg-white min-w-80 p-6 pt-16 pb-10 md:mt-32 mt-16 rounded-md relative flex md:items-start items-center justify-center flex-col">
            <div class="w-20 h-20 rounded-full bg-[#3A3053] flex items-center justify-center absolute -top-10">
              <img src="../assets/images/icon-fully-customizable.svg" alt="">
            </div>
            <div class="mb-5 text-xl font-bold">Fully Customizable</div>
            <div class="text-[#969698] md:text-left text-center">Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</div>
          </div>

        </div>

      </div>
    </div>

    <div class="boostSection w-full h-auto flex flex-col min-h-64 items-center justify-center gap-8">
      <p class="md:text-5xl text-3xl font-bold text-white">Boost your links today</p>
      <button class="text-xl font-semibold py-3 bg-[#29D1D1] text-white rounded-full px-6 cursor-pointer hover:bg-[#29d1d1bb]">Get Started</button>
    </div>

    <!-- Footer is here -->
    <FooterCmp />

    <!-- <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div> -->
  </div>
</template>

<script>
import NavbarCmp from './NavbarCmp.vue';
import FooterCmp from './FooterCmp.vue';

export default {
  name: 'HomePage',
  components: {
    NavbarCmp,
    FooterCmp
  },
  data() {
    return {
      isCopied: false,
      isEmpty: false,
      requestedUrl: '',
      shortlyCode: '',
      shortenedUrls: [],
    };
  },
  methods: {
    async shortenUrl() {
      try {
        if (this.requestedUrl == '') {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }

        const response = await fetch(`https://url-shortening-vue-backend.vercel.app/api/shorten`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: this.requestedUrl.trim() }),
        });

        const data = await response.json();

        if (data.error) {
          this.errorMessage = data.error;
          this.shortlyCode = '';
        } else {
          this.shortlyCode = data.result_url;
          this.errorMessage = '';

          const shortenedUrl = {
            requestedUrl: this.requestedUrl,
            resultUrl: this.shortlyCode,
          };

          this.shortenedUrls.push(shortenedUrl);

          // Store in localStorage
          localStorage.setItem('shortenedUrls', JSON.stringify(this.shortenedUrls));
          this.requestedUrl = '';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
        this.shortlyCode = '';
      }
    },
    copyToClipboard(item, index) {
      navigator.clipboard.writeText(item.resultUrl);
      this.shortenedUrls[index].isCopied = true;

      setTimeout(() => {
        this.shortenedUrls[index].isCopied = false;
      }, 3000);
    },
    clearInput(index) {
      this.shortenedUrls.splice(index, 1);
      localStorage.setItem('shortenedUrls', JSON.stringify(this.shortenedUrls));
    },
    loadShortenedUrls() {
      const storedUrls = localStorage.getItem('shortenedUrls');
      if (storedUrls) {
        this.shortenedUrls = JSON.parse(storedUrls);
      }
    },
  },
  mounted() {
    this.loadShortenedUrls();
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

@media screen and (max-width: 786px) {
   .inputSection {
      background-image: url(../assets/images/bg-shorten-mobile.svg);
   }

   .boostSection {
      background-image: url(../assets/images/bg-boost-mobile.svg);
   }
}
</style>
