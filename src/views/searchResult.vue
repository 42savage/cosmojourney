<template>
<div v-bind:class="{full: cosmoData.length < 3}" class="resultPage">
  <modal/>
      <vue-particles
        class="particles"
        color="#000000"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="1.2"
        :lineLinked="false"
        :moveSpeed="1.1"
        :hoverEffect="false"
        :clickEffect="false"
      >
      </vue-particles>
  <navigation v-bind:class="{logoFull: cosmoData.length < 1}" />
  <p class="text anim">Write something related to universe like for example sun, moon or mars</p>
<div class="cont anim">
  <input class="input" type="text" placeholder="What are you looking for?" v-model="search" v-on:keyup.enter="getData">
  <input class="submit" type="submit" value="enter" @click="getData">
</div>
<a class="errorMessage" v-if="searchError">I had some problems with your search, try to write something else </a>
<div class="tags anim"><span>Common tags: </span>
  <a class="tag" @click="setTag('moon'); getData()">Moon</a>
  <a class="tag" @click="setTag('earth'); getData()">Earth</a>
  <a class="tag" @click="setTag('saturn'); getData()">Saturn</a>
  <a class="tag" @click="setTag('mars'); getData()">Mars</a>
</div>
<loader v-if="loading" /> 
  <grid/>
  <div v-bind:class="{footerFull: cosmoData.length <= 4}" class="footer">
    <h1>Cosmo <span class="blue">Journey</span></h1>
    <a>Created by shizz0@outlook.com</a>
  </div>
</div>
</template>

<script>
import modal from '../components/modal';
import loader from '../components/loader';
import navigation from '../components/navigation';
import { mapGetters, mapActions } from 'vuex';
import grid from '../components/grid';
export default {
  name: 'searchResult',
  components: {
    modal,
    loader,
    navigation,
    grid
  },
  computed:{
    ...mapGetters(['cosmoData', 'loading', 'searchError']),
    search: {
      get(){
        return this.$store.state.search;
      },
      set(value){
        return this.$store.commit('setSearch', value);
      }
    },
  },
  methods:{
    ...mapActions(['setTag', 'getData']),
  },
  mounted(){
        TweenMax.from(".anim", 1, {
          delay: 0.5,
          opacity: 0,
          y: -600,
          ease: Power2.easeInOut
        });
        TweenMax.to(".anim", 1, {
          opacity: 1,
          y: 0,
          delay: 0.5,
          ease: Power2.easeInOut
        });

         TweenMax.from(".nav", 1, {
          delay: 0.5,
          opacity: 0,
          y: -600,
          ease: Power2.easeInOut
        });
        TweenMax.to(".nav", 1, {
          opacity: 1,
          y: 0,
          delay: 0.5,
          ease: Power2.easeInOut
        });
    },
}
</script>

<style lang="scss" scoped>
.particles{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
.resultPage{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.full{
  height: 100vh !important;
}
.logoFull{
  position: absolute;
  top: 0;
  left: 0;
}
.footerFull{
  position: absolute;
  bottom: 0;
  left: 0;
}
.grid{
  width: 99vw;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 12px;
  padding: 42px;
}
.image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  outline: none;
}
.input{
  // background: #222442;
  border: 2px solid #222442;
  border-radius: 20px;
  width: 528px;
  height: 44px;
  font-size: 22px;
  // color: rgb(223, 223, 223);
  color: #222442;
  outline: none;
  padding: 0 16px;
}
 .submit{
    border: none;
    background: rgb(45, 47, 95);
    width: 102px;
    height: 44px;
    border-radius: 20px;
    margin-left: -100px;
    color: rgb(226, 226, 226);
    cursor: pointer;
    &:hover{
    background: rgb(70, 73, 141);
    }
  }
  .cont{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .tags{
    margin: 14px;
  }
  .tag{
    padding: 6px 12px;
    border-radius: 25px;
    background: white;
    border: 2px solid rgb(45,47,95);
    margin: 6px;
    cursor: pointer;
    &:hover{
      background: rgb(45, 47, 95);
      color: white;
    }
  }
  .text{
    margin: 0 0 6px 0;
    background: white;
  }
  .errorMessage{
    color: crimson;
    margin: 12px 0;
  }
  .footer{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background:rgb(24, 25, 29);
    h1, a{
      color: white;
    }
    .blue{
      color: #3C74A8;
    }
  }
  .exploreBtn{
    text-decoration: none;
    color: rgb(45, 47, 95);
    font-weight: bold;
  }
</style>