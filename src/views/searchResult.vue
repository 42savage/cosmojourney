<template>
<div class="resultPage">
  <modal/>
  <div class="logoContainer animated fadeInDown">
    <router-link tag="div" class="logo" to="/">
      <h1>Cosmo</h1>
      <h2>Journey</h2>
    </router-link>
  </div>
  <p class="text animated fadeInDown">Write something related to universe like for example sun, moon or canis majoris</p>
<div class="cont animated fadeInUp">
  <input class="input" type="text" placeholder="What are you looking for?" v-model="search" v-on:keyup.enter="getData">
  <input class="submit" type="submit" value="enter" @click="getData">
</div>
<div class="tags animated fadeInUp"><span>Common tags: </span>
  <a class="tag" @click="setTag('moon'); getData()">Moon</a>
  <a class="tag" @click="setTag('earth'); getData()">Earth</a>
  <a class="tag" @click="setTag('saturn'); getData()">Saturn</a>
  <a class="tag" @click="setTag('mars'); getData()">Mars</a>
</div>
<a class="errorMessage animated pulse" v-if="searchError">I had some problems with your search, try to write something else </a>
<!-- <h1>{{loading}}</h1> -->
  <ul class="grid">
    <li class="grid-item animated slideInUp" v-for="item in cosmoData" :key="item.id" >
      <img @click="openModal(item)" class="image" v-bind:src="item.links[0].href" v-bind:title="item.data[0]">
    </li>
  </ul>
  <div v-if="!searchError" class="footer animated fadeInDown">
    <h1>Cosmo <span class="blue">Journey</span></h1>
    <a>Created by shizz0@outlook.com</a>
  </div>
</div>
</template>

<script>
import modal from '../components/modal';
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: 'searchResult',
  components: {
    modal
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
    ...mapActions(['getData', 'setTag', 'openModal']),
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
.resultPage{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
.logoContainer{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 42px;
}
.logo{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
    h1{
    letter-spacing: 6px;
    font-size: 24px;
    text-transform: uppercase;
    color: rgb(45, 47, 95);
  }
  h2{
    font-size: 18px;
    margin: -5px 0;
    color: #3C74A8;
  }
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
  }
  .errorMessage{
    color: crimson;
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
</style>