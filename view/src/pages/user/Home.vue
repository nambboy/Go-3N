<template>
  <div id="home-main" class="scroll-smooth" v-scroll="onScroll">
    <div class="relative" :class="{ 'header-book': $route.fullPath == '/home' }">
      <About />
      <Header />
      <Promo />
      <div class="overlay"></div>
    </div>
    <div class="content">
      <ChooseMe />
    </div>
    <Suggest />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import About from '@/layouts/user/About.vue'
import Header from '@/layouts/user/Header.vue'
import Footer from '@/layouts/user/Footer.vue'
import Promo from '@/components/user/home/Promo.vue'
import ScrollToTop from '@/components/user/home/ScrollToTop.vue'
import Suggest from '@/components/user/home/Suggest.vue'
import ChooseMe from '@/components/user/home/ChooseMe.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    About,
    Footer,
    Promo,
    ScrollToTop,
    ChooseMe,
    Suggest
  },
  methods: {
    ...mapActions({
      setScroll: 'app/setScroll'
    }),
    onScroll() {
      this.setScroll({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
  }
}
</script>
<style lang="scss">
#home-main {
  .header-book {
    background-image: url('../../assets/img/user/bg-image-main.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center 0px;
    background-size: cover;
    z-index: 1;
    min-height: 100vh;
  }
}
</style>
