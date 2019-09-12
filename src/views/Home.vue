<template>
  <div class="home">
    <CarouselHeader />
    <div class="container-fluid">
    <!-- SubNavbarApp -->
    <nav class="navbar
     navbar-expand-md
     justify-content-center
     navbar-light
     sticky-top">
      <ul class="nav nav-pills flex-column flex-sm-row">
        <li class="nav-item">
          <a class="nav-link" href="#header-app" v-smooth-scroll><i class="fas fa-home"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about-app" v-smooth-scroll>عن البطولة</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#class-app" v-smooth-scroll>الفئات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#awards-app" v-smooth-scroll>الجوائز</a>
        </li>
      </ul>
    </nav>
    <!-- page -->
    <About />
    <Class />
    <Awards />
    <partners />
    <MapGoogle/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CarouselHeader from '@/components/CarouselHeaderApp.vue';
import About from '@/components/AboutApp.vue';
import Class from '@/components/ClassApp.vue';
import Awards from '@/components/AwardsApp.vue';
import MapGoogle from '@/components/MapApp.vue';
import Partners from '@/components/PartnersApp.vue';
export default {
  name: 'home',
  components: {
    CarouselHeader,
    About,
    Class,
    Awards,
    MapGoogle,
    Partners,
  },
};
</script>

<style lang="scss" scoped>
  //subnavbar
  nav .nav-pills{
    padding: 0px;
    border-radius: 4px;
    background: #009444;
  }
  nav .nav-pills a{
    color: #fff;
  }
  nav .nav-pills a:hover{
    box-shadow: 0px 0px 4px 1px green;
  }

  @media (max-width: 576px){
    nav{
      display: none;
    }
  }


</style>
