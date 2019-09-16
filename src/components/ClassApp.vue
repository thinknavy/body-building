<template>
  <div id="class-app" class="py-4">
    <Title title="فئات البطولة" />
    <div class="row justify-content-center">
      <div class="col-md-12 class-one col-lg-4" data-aos="fade-left" data-aos-duration="1000">
        <div class="text-center">
          <img src="@/assets/class/1.png" class="rounded" alt="...">
        </div>
      </div>
      <div class="col-md-12 class-one col-lg-4"  data-aos="flip-left" data-aos-duration="1000">
        <div class="text-center">
          <img src="@/assets/class/2.png" class="rounded" alt="...">
        </div>
      </div>
      <div class="col-md-12 class-one col-lg-4" data-aos="fade-right" data-aos-duration="1000">
        <div class="text-center">
          <img src="@/assets/class/3.png" class="rounded" alt="...">
        </div>
      </div>
  </div>
</div>
</template>
<script>
import Title from '@/components/TitleApp.vue';
export default {
  name: 'Class',
  components: {
    Title,
  },
  data: () => ({

  }),
};
</script>
<style lang="scss" scoped>
col{
  padding: 0px !important;
}
#class-app{
  // background: url("../assets/sectionBg-360.jpg") repeat;
  // background-position: top;
  // background-size: auto;
}
@media (max-width: 992px){
  .class-one{
    margin-bottom: 20px;
  }
}
</style>
