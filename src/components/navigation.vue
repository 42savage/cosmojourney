<template>
<div v-bind:class="{abs: this.$router.history.current.name === 'home'}" class="nav">
    <router-link to="/" tag="div" class="logo">
        <h1 v-bind:class="{light: this.$router.history.current.name === 'home'}">Cosmo</h1>
        <h2>journey</h2>
    </router-link>
    <router-link class="explore" to="/explore" tag="a" v-bind:class="{light: this.$router.history.current.name === 'home'}">Explore</router-link>
</div>
</template>

<script>
export default {
    name: 'navigation',
}
</script>

<style lang="scss" scoped>
.abs{
  position: absolute;
  top: 0;
}
.light{
  color: white !important;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 28px
}
.logo{
  line-height: 18px;
  cursor: pointer;
  h1{
    font-size: 22px;
    font-weight: bold;
  }
  h2{
    color: #397fc0;
    font-size: 18px;
  }
}
.explore{
  text-decoration: none;
  font-weight: bold;
  color: black
}
@keyframes bounce {
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-10px);
		-ms-transform:     translateY(-10px);
		transform:         translateY(-10px)
	}
	60% {
		-webkit-transform: translateY(-5px);
		-ms-transform:     translateY(-5px);
		transform:         translateY(-5px)
	}
}

@media (min-width: 768px){
  .nav{
    padding: 64px;
  }
  .logo{
    line-height: 20px;
    h1{
      font-size: 26px;
    }
    h2{
      font-size: 18px;
    }
  }
  .explore{
    font-size: 18px;
    font-weight: normal;
  }
}
</style>