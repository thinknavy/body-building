<template>
  <div id="app">
    <Header />
    <div class="container-fluid">

      <About />
      <Class />
      <Awards />
      <partners />
      <MapGoogle/>

    </div>
    <Footer />


  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/HeaderApp.vue';
import About from '@/components/AboutApp.vue';
import Class from '@/components/ClassApp.vue';
import Awards from '@/components/AwardsApp.vue';
import MapGoogle from '@/components/MapApp.vue';
import Footer from '@/components/FooterApp.vue';
import Partners from '@/components/PartnersApp.vue';

export default {
  name: 'app',
  components: {
    Header,
    About,
    Class,
    Awards,
    MapGoogle,
    Footer,
    Partners,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
#app {
  direction: rtl;
  font-family: 'Cairo', sans-serif;
  font-size: 16;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: url("./assets/sectionBg-360.jpg") repeat;
  background-position: center;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
