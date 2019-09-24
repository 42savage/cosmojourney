<template>
  <div class="home">
    <div class="nav">
      <h1>Cosmo</h1>
      <h2>journey</h2>
    </div>
    <div class="content">
      <h1 class="colored">Cosmo <span class="test">Journey</span></h1>
      <div class="inputContainer">
        <h2 class="info">Get informations about universe!</h2>
        <h4 class="errorMessage" v-if="searchError">Something went wrong, check your input!</h4>
        <div class="cont">
          <input class="input" type="text" placeholder="What are you looking for?" v-model="search" v-on:keyup.enter="getData">
          <input class="submit" type="submit" value="enter" @click="getData">
        </div>
      </div>
    </div>
      <div class="author">
        <a class="auth-text">created by shizz0@outlook.com</a>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'home',
  computed:{
    ...mapGetters(['searchError'] ),
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
    ...mapActions(['getData'])
  }
}
</script>
<style lang="scss" scoped>
.home{
  background: url('../assets/background.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.nav{
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  padding: 68px;
  position: absolute;
  h1{
    letter-spacing: 6px;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  h2{
    font-size: 18px;
    margin: -5px 0;
    color: #3C74A8;
  }
}
.content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    font-size: 102px;
    font-weight: bold;
    color: #ffffff;
  }
  .colored{
    color: rgb(57, 127, 192);
  }
  .test{
    font-weight: lighter;
    color: white;
  }
  .info{
    color: #3C74A8;
    margin-bottom: 16px;
    font-weight: lighter;
  }
  .input{
    background: #222442;
    border: none;
    border-radius: 20px;
    width: 528px;
    height: 44px;
    font-size: 22px;
    color: rgb(223, 223, 223);
    outline: none;
    padding: 0 16px;
    &:focus{
      background: #353866;
    }
  }
  .submit{
    border: none;
    background: #1D1F40;
    width: 102px;
    height: 44px;
    border-radius: 20px;
    margin-left: -100px;
    color: #C7C7C7;
    cursor: pointer;
    &:hover{
    background: rgb(45, 47, 95);
    }
  }
  .cont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
}
.inputContainer{
  margin-top: 164px;
  margin-bottom: -200px;
}
.author{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin: 18px 0;
  .auth-text{
    color: #C7C7C7;
    font-size: 18px;
    letter-spacing: 6px;
  }
}
.errorMessage{
  color: crimson;
  margin-bottom: 16px;
  font-weight: lighter;
}

</style>