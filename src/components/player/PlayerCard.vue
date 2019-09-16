<template>
  <div id="player-card">

    <div class="col-md-6 col-lg-4 mb-3">
      <div
        @mouseover="selectCard = 2;"
        @mouseleave="selectCard = false"
        class="card"
        style="width: 18rem;"
        >
        <img src="https://c.wallhere.com/photos/94/2f/sylvester_stallone_man_actor_brunette_face_hollywood-733353.jpg!d" class="card-img-top" alt="...">
        <transition name="fade">
        <div class="card-body"
          v-if="2 == selectCard"

        >
          <h5 class="card-title">{{name}}</h5>
          <p class="card-text">
            <span id="year">{{year}}yr</span> |
            <span id="km">{{km}}km</span> |
            <span id="cm">{{cm}}cm</span>
          </p>
        </div>
        </transition>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "PlayerCard",
  props: [
    'title',
    'category',
    'name',
    'year',
    'km',
    'cm',
  ],
  data: () => ({
    selectCard: ""
  })
}
</script>
<style lang="scss" scoped>
// card
.card{
    margin: auto;
}
.card img {
  position: relative;
  height:380px;
}
.card .card-body{
  position: absolute;
  bottom: 0;
  background: #0000009e;
  width: inherit;
}
@media (min-width: 992px){
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
@media (max-width: 992px){
  .card-body {
    display: block !important
  }
}
</style>
