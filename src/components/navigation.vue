<template>
<div class="nav">
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
.light{
  color: white !important;
}
.nav{
    width: 100% !important;
    display: flex !important;
    justify-content: space-between !important;
    flex-direction: row !important;
    align-items: center !important;
    padding: 42px !important;
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
.explore{
    text-decoration: none;
    font-weight: bold;
    color: rgb(45, 47, 95);
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    &:hover{
      animation-name: bounce;
    }
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
</style>