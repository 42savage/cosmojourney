<template>
  <div class="home">
    <loader v-if="loading" />
    <navigation/>
    <div class="content">
      <h1 class="headingText"><span class="colored">Cosmo</span> Journey</h1>
      <div class="inputContainer">
        <h2 class="info">Explore the whole universe!</h2>
        <h4 class="errorMessage" v-if="searchError">Something went wrong, check your input!</h4>
        <div class="inputBox">
          <input class="input" type="text" placeholder="Type something related to universe" v-model="search" v-on:keyup.enter="getData">
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
      </div>
      <div class="author">
        <a class="auth-text">created by shizz0@outlook.com</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import loader from '../components/loader';
import navigation from '../components/navigation';
export default {
  name: 'home',
  components:{
    loader,
    navigation
  },
  computed:{
    ...mapGetters(['searchError', 'loading'] ),
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

*{
  color: white;
}
.home{
  height: 100%;
}
.content{
  width: 100%;
  background: #030416 url('../assets/background.jpg') center no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.headingText{
  font-size: 72px;
  line-height: 62px;
  text-align: center;
  font-weight: normal;
  margin: 66px 0 114px 0;
  .colored{
    color: #397FC0;
    font-weight: bold;
  }
}
.info{
  color: #397FC0;
  font-size: 14px;
  font-weight: light;
  text-align: center;
}
.inputContainer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input{
  width: 286px;
  height: 40px;
  background: #222442;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  outline: none;
  padding-left: 18px;
  &::placeholder{
    color: rgba(255, 255, 255, 0.479);
  }
  &:focus{
    box-shadow: 0 0 12px 2px #397fc0;
  }
}
.submit{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background: #1D1F40;
  margin-left: -40px;
    cursor: pointer;
  svg{
    fill: rgba(255, 255, 255, 0.616);
    width: 14px;
    height: 14px;
  }
}

.author{
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin: 18px 0;
}
@media (min-width: 768px){
  .headingText{
    font-size: 92px;
    margin: 200px 0 300px 0;
  }
  .info{
    font-size: 18px;
    margin-bottom: 12px;
  }
  .input{
    width: 500px;
    height: 50px;
    font-size: 18px;
  }
  .submit{
    width: 50px;
    height: 50px;
    margin-left: -50px;
  }
}
@media (min-width: 1024px) {
  .headingText{
    font-size: 106px;
    margin: 160px 0 180px 0;
  }
}
@media (orientation: landscape){
    .headingText{
      margin: 46px;
    }
    .auth-text{
      font-size: 12px;
    }
}
</style>