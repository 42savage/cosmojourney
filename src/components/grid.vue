<template>
  <ul class="grid">
    <li class="grid-item" v-for="item in cosmoData" :key="item.id" >
      <img @click="openModal(item)" class="image" v-bind:src="item.links[0].href" v-bind:title="item.data[0].title">
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { TweenMax, Power2 } from 'gsap';
export default {
    name: 'grid',
    computed:{
        ...mapGetters(['cosmoData'])
    },
    methods:{
        ...mapActions(['openModal'])
    },
    mounted(){
      TweenMax.from(".grid", 1, {
        delay: 0.5,
        opacity: 0,
        y: 600,
        ease: Power2.easeInOut
      });

      TweenMax.to(".grid", 1, {
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: Power2.easeInOut
      });
    },
    watch:{
      cosmoData(){
        TweenMax.from(".grid", 1, {
        delay: 0.5,
        opacity: 0,
        y: 600,
        ease: Power2.easeInOut
      });

      TweenMax.to(".grid", 1, {
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: Power2.easeInOut
      });
      }
    }
}
</script>

<style lang="scss" scoped>
.grid{
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin: 20px;
  grid-gap: 6px;
}
.image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  outline: none;
}
@media (min-width: 768px){
  .grid{
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}
</style>