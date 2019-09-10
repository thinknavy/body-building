<template>
  <div id="title-app" class="py-2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col d-none d-lg-block right p-3">
          <hr>
        </div>
        <div class="col-6 title">
          <h1>{{title}}</h1>
        </div>
        <div class="col d-none d-lg-block left p-3">
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: ['title'],
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
  hr{
    background: linear-gradient(to right, #13a511, #bafda400);
    height: 3px;
  }
  .left hr{
    transform: rotate(180deg)
  }

  @media (max-width: 992px){
    h1{
      border-bottom: 2px solid #72ef70;
    }
  }
</style>
