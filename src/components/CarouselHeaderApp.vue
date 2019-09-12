<template>
  <div id="carousel-header-app">
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
  name: "CarouselApp",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
