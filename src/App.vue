<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <Header />
    <loading-screen ref="loadingScreen">
      <router-view />
    </loading-screen>
    <Footer />



  </div>
</template>

<script>
import LoadingScreen from 'vue-loading-screen';
// @ is an alias to /src
import Header from '@/components/HeaderApp.vue';

import Footer from '@/components/FooterApp.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    LoadingScreen,
  },
  data() {
    return {
      objects: [],
    };
  },
  methods: {
    refresh() {
      const p = new Promise((success) => {
        setTimeout(success, 1000);
      });

      this.$refs.loadingScreen.load(p);

      p.then(() => {
        this.objects = [
          { id: 1, name: 'Foo' },
          { id: 2, name: 'Bar' },
        ];
      });
    },
  },
  created() {
    this.$nextTick(() => {
      this.refresh();
    });
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
  background-attachment: fixed;

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
