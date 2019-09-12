<template>
  <div id="header-app" class="pt-5">
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
    <nav class="navbar navbar-expand-md py-3">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-chevron-circle-down"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">القائمة الرئيسية<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">المشاركين</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >المباريات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">الفعليات</a>
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
nav .navbar-nav  a {
	color: #fff !important;
}

@media (max-width: 768px){
  nav{
    background: #079646;
  }
}
</style>
