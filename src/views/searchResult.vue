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
  <button class="submit" @click="getData">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="485.213px" height="485.213px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;"
	 xml:space="preserve">
<g>
	<g>
		<path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
			c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
		<path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
			C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
			c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
			C318.424,257.208,257.206,318.416,181.956,318.416z"/>
		<path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"/>
	</g>
</g>
</svg>
  </button>
</div>
<a class="errorMessage" v-if="searchError">I had some problems with your search, try to write something else </a>
<div class="tags anim"><span class="tag-title">Common tags: </span>
  <div class="tag-wrapper">
    <a class="tag" @click="setTag('moon'); getData()">Moon</a>
    <a class="tag" @click="setTag('earth'); getData()">Earth</a>
    <a class="tag" @click="setTag('saturn'); getData()">Saturn</a>
    <a class="tag" @click="setTag('mars'); getData()">Mars</a>
  </div>
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
.resultPage{
  position: relative;
  width: 100%;
  height: 100%;
}
.nav{
  padding: 28px 16px;
}
.footerFull{
  position: absolute;
  bottom: 0;
}

.particles{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  display: none;
}
.text{
  padding: 0 12px;
  color: #222442;
  text-align: center;
}
.cont{
  text-align: center;
}
.input{
  height: 40px;
  border-radius: 20px;
  border: 2px solid #222442;
  width: 286px;
  padding-left: 18px;
  outline: none;
  margin: 8px 0 2px 0;
  font-size: 14px;
  &:focus{
    box-shadow: 0 0 12px 2px #222442;
  }
}
.submit{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: #222442;
  margin-left: -40px;
  svg{
    width: 14px;
    height: 14px;
    fill: white;
  }
}
.tags{
  display: flex;
  flex-direction: column;
  .tag-title{
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
  }
  .tag-wrapper{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.tag{
  margin: 0 6px;
  border: 2px solid #222442;
  border-radius: 25px;
  padding: 4px 8px;
}
.footer{
  width: 100%;
  height: 80px;
  background: #222442;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
@media (min-width: 425px){
  .input{
    width: 380px;
  }
  .nav{
    padding: 28px 40px;
  }
  .text{
    padding: 0 22px;
  }
}
@media (min-width: 1024px){
  .tag{
    cursor: pointer;
    &:hover{
      background: #222442;
      color: white;
    }
  }
  .input{
    width: 600px;
    height: 50px;
    border-radius: 30px;
    font-size: 16px;
  }
  .submit{
    border-radius: 30px;
    height: 50px;
    width: 50px;
    margin-left: -50px;
    cursor: pointer;
    svg{
      width: 14px;
      height: 14px;
    }
  }
}
</style>