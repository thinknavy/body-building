<template>
  <div id="footer-app" class="py-4">

    <!-- Footer Links -->
 <div class="container-fluid text-center">

   <!-- Grid row -->
   <div class="row justify-content-center">

     <!-- Grid column -->
     <div class="col-md-3 mb-md-0 mb-3 text-md-right">

       <ul class="list-unstyled">
         <li>
           <a href="#about-app" v-smooth-scroll>عن البطولة</a>
         </li>
         <li>
           <a href="#!">المشاركين</a>
         </li>
         <li>
           <a href="#!">المباريات</a>
         </li>
         <li class="nav-item">
           <a href="#class-app" v-smooth-scroll>فئات</a>
         </li>
         <li>
           <a href="#awards-app" v-smooth-scroll>الجوائز</a>
         </li>
       </ul>

     </div>
     <!-- Grid column -->

     <!-- Grid column -->
     <div class="col-md-3 mb-md-0 mb-3 text-md-right">

       <!-- Links -->

       <ul class="list-unstyled">
         <li>
           <a href="#!">الفاعليات</a>
         </li>
         <li>
           <a href="#!">المعرض</a>
         </li>
         <li>
           <a href="#!">اتصل بنا</a>
         </li>
       </ul>

     </div>
     <!-- Grid column -->

     <!-- Grid column -->
     <div class="col-md-6 mt-md-0 mt-3">

       <!-- Content -->
       <img src="@/assets/logo.svg" alt="logo" width="150" height="auto" />

     </div>
     <!-- Grid column -->

     <hr class="clearfix w-100 d-md-none pb-3">





   </div>
   <!-- Grid row -->

 </div>
 <!-- Footer Links -->

 <!-- Copyright -->
 <div class="footer-copyright text-center py-3">© 2019 Copyright:
   <a href="http://thinknavy.net/">ThinkNavy.net</a>
 </div>
 <!-- Copyright -->

  </div>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
#footer-app{
  background-image: linear-gradient(to right, #00ff1f85, #31bb28a8, #14a018a1);
}
a{
  color:#fff;
}
a:hover{
  color:#fff;
  text-decoration: none;
}
@media (max-width: 768px){
  .list-unstyled{
    padding-right: 0px;
  }
}
</style>
