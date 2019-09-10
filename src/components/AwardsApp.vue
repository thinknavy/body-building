<template>
  <div id="awards-app" class="py-4">
    <Title title="فئات البطولة" />
    <div class="container">

      <div class="row justify-content-center awards-image py-3" data-aos="fade-up"
        data-aos-duration="1000">
        <div class="col-md-12 class-one col-lg-4">
          <div class="text-center">
            <img src="@/assets/awards/ph.png" width="239.5" height="300" class="rounded" alt="...">
          </div>
        </div>
        <div class="col-md-12 class-one col-lg-4">
          <div class="text-center">
            <img src="@/assets/awards/bb.png" width="239.5" height="300" class="rounded" alt="...">
          </div>
        </div>
        <div class="col-md-12 class-one col-lg-4">
          <div class="text-center">
            <img src="@/assets/awards/mp.png" width="239.5" height="300" class="rounded" alt="...">
          </div>
        </div>
      </div>

      <div class="awards-content1 py-2">
          <h1 class="my-3">ريال 50000</h1>
          <p>جائزة الفائز بلقب بطل الأبطال فى فئة كمال الأجسام</p>
      </div>
      <div class="awards-content py-2">
          <h3 class="my-3">ريال 30000</h3>
          <p>جائزة الفائز بلقب بطل الأبطال فى فئة الفيزيك</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/TitleApp.vue';
export default {
  name: 'Awards',
  components: {
    Title,
  },
  data: () => ({

  }),
};
</script>
<style lang="scss" scoped>
#awards-app{
  background: url("../assets/sectionBg-360.jpg") repeat;
  background-position: top;
  background-size: auto;
}

.awards-content1{
  font-size: 30px;
}
.awards-content1 h1{
  width: 200px;
  margin:auto;
  padding:2px;
  background-color: #17883f;
  border-radius: 20px;
}
.awards-content{
  font-size: 25px;
}
.awards-content h3{
  width: 150px;
  margin:auto;
  padding:2px;
  background-color: #17883f;
  border-radius: 20px;
}
@media (max-width: 992px){
  .class-one{
    margin-bottom: 20px;
  }
}
</style>
