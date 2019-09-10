<template>
  <div id="header-app">
    <!-- logo -->
    <div class="container">
    <div class="row logo">
        <div class="col"></div>
        <div class="col">
          <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <div class="col"></div>

      </div>
    </div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-md navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>القائمة الرئيسية
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about-app" v-smooth-scroll>عن البطولة <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">المشاركين</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >المباريات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#class-app" v-smooth-scroll>فئات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#awards-app" v-smooth-scroll>الجوائز</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">الفاعليات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">المعرض</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">اتصل بنا</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- carousel -->
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/big-ramy.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/big-ramy.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/big-ramy.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
#header-app{
  background: url("../assets/sectionBg.jpg") no-repeat;
  background-position: center;
  background-size: cover;

}
.logo img {
  height: fit-content;
}

.navbar-nav a:hover {
  color: #00fb2d !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
}
@media (max-width: 768px){
  nav{
    background: #079646;
  }
}
</style>
