<template>
  <div id="map-app" class="py-4">
    <div class="container">

      <div class="embed-responsive embed-responsive-21by9">
        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.579621921955!2d46.65124931562489!3d24.638169660197278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1b3e592f5eb9%3A0xa96ae28f088fc599!2sKing%20Fahad%20Cultural%20Centre!5e0!3m2!1sen!2seg!4v1568043971017!5m2!1sen!2seg"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/TitleApp.vue';
export default {
  name: "MapGoogle",
  components: {
    Title,
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
#map-app{
  // background: url("../assets/sectionBg-360.jpg") repeat;
  // background-position: top;
  // background-size: auto;
}
</style>
