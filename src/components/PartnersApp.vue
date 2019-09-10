<template>
  <div id="partners-app">
    <Title title="شركاء النجاح" />
    <div class="container">
      <div class="row row justify-content-center">
        <div class="col">
          <img src="@/assets/partners/logos1.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/partners/logos2.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/partners/logos3.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/partners/logos4.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/partners/logos5.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/partners/logos6.png" class="rounded my-2" alt="...">
        </div>
      </div>

      <h1 class="mt-5">برعاية</h1>
      <div class="row row justify-content-center">
        <div class="col">
          <img src="@/assets/sponsers/logos7.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/sponsers/logos8.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/sponsers/logos9.png" class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/sponsers/logos99.png"class="rounded my-2" alt="...">
        </div>
        <div class="col">
          <img src="@/assets/sponsers/logos999.png" class="rounded my-2" alt="...">
        </div>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
import Title from '@/components/TitleApp.vue';
export default {
  name: "Partners",
  components: {
    Title,
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
#partners-app{
  background: url("../assets/sectionBg-360.jpg") repeat;
  background-position: top;
  background-size: auto;
}
</style>
