<template>
  <div id="players" class="py-4">

    <div class="container">
      <!-- <h2 class="pb-3">المشاركين</h2> -->
      <!-- SubNavbarApp -->
      <nav class="navbar
       navbar-expand-md
       justify-content-center
       navbar-light
       sticky-top">
        <ul class="nav nav-pills flex-column flex-sm-row">
          <li class="nav-item">
            <a class="nav-link" href="#header-app" v-smooth-scroll><i class="fas fa-home"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Physics" v-smooth-scroll>الفيزيك</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#BodyBuilding" v-smooth-scroll>كمال الأجسام</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#PhysicsMaster" v-smooth-scroll>المسكلر فيزيك</a>
          </li>
        </ul>
      </nav>
      <!-- الفيزيك -->
      <div class="mb-5" id="Physics">
        <Title title="الفيزيك" />
        <div class="row justify-content-center">

          <PlayerCard v-for="player in players"
            v-if="player.category=='فيزيك'"
            :name="player.name"
            :category="player.category"
            :year="player.year"
            :km="player.km"
            :cm="player.cm"
           />

        </div>
      </div>

      <!-- كمال الأجسام -->
      <div class="mb-5" id="BodyBuilding">
        <Title title="كمال الأجسام" />
        <div class="row justify-content-center">

          <PlayerCard v-for="player in players"
            v-if="player.category=='كمال الأجسام'"
            :name="player.name"
            :category="player.category"
            :year="player.year"
            :km="player.km"
            :cm="player.cm"
           />

        </div>
      </div>


      <!-- المسكلر فيزيك -->
      <div class="mb-5" id="PhysicsMaster">
        <Title title="المسكلر فيزيك" />
        <div class="row justify-content-center">

          <PlayerCard v-for="player in players"
            v-if="player.category=='المسكلر فيزيك'"
            :name="player.name"
            :category="player.category"
            :year="player.year"
            :km="player.km"
            :cm="player.cm"
           />

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import JsonFile from '@/db.json';
import Title from '@/components/TitleApp.vue';
import PlayerCard from '@/components/player/PlayerCard.vue';
export default {
  name: "Players",
  components: {
    Title,
    PlayerCard,
  },
  data: () => ({
    players: JsonFile,
    selectCard: ""
  }),
  methods: {

  }
}
</script>
<style lang="scss" scoped>
//subnavbar
nav .nav-pills{
  padding: 0px;
  border-radius: 4px;
  background: #009444;
}
nav .nav-pills a{
  color: #fff;
}
nav .nav-pills a:hover{
  box-shadow: 0px 0px 4px 1px green;
}

@media (max-width: 576px){
  nav{
    display: none;
  }
}
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
