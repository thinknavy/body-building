<template>
  <div id="about-app" class="py-4">
    <Title title="نبذة عن البطولة" />
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 about-content mt-5">
          <h1 class="title mb-5">
            تجمع تنافسي رياضي<br />
            وحدث سعودي فريد
          </h1>
          <p class="content">
            منذ القدم كان التمجيد من نصيب الأجسام المكتملة القوية مفتولة
            العضلات، وفي الحضارة العربية الإسلامية أشار القرآن إلى ميزة الجسم
            الكامل القوي وفي القصص الشعبية من العالم أجمع ما يمجد الكمال
            الجسماني والقوة العضلية والنشاط والصحة البدنية. ومن هنا انبثقت بطولة
            كأس الاتحاد السعودي لكمال الأجسام تعتبر الأولى من نوعها في المملكة
            العربية السعودية إضافة إلى أنها تجمع تنافسي رياضي وحدث سعودي فريد من
            نوعه لبناء الأجسام حيث تهدف الرسالة منه توعية وتثقيف المجتمع رياضياً
            وصحياً وغذائياً وأن يكون مصدر إلهام لجيل الشباب للوصول إلى جسم
            مثالي.
          </p>
        </div>
        <div class="about-image col-6 d-none d-lg-block">
          <img src="@/assets/aboutBg.png" alt="" class="img-fluid float-left" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/TitleApp.vue";

export default {
  name: "About",
  components: {
    Title
  },
  data: () => ({})
};
</script>
<style lang="scss" scoped>
#about-app {
  background: url("../assets/sectionBg-360.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}

.about-content .title {
  text-align: right;
}
.about-content .content {
  text-align: right;
  line-height: normal;
}
// .about-image img {
//   box-shadow: 4px 3px 10px 0px #007933;
// }

@media (max-width: 992px) {
  .about-content .title {
    text-align: center;
  }
  .about-content .content {
    text-align: center;
  }
}
</style>
