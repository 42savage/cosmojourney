<template>
<div class="nav">
    <router-link to="/" tag="div" class="logo">
        <h1>Cosmo</h1>
        <h2>journey</h2>
    </router-link>
    <router-link class="explore" to="/explore" tag="a">Explore</router-link>
</div>
</template>

<script>
export default {
    name: 'navigation'
}
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
.explore{
    text-decoration: none;
    font-weight: bold;
    color: rgb(45, 47, 95);
}
</style>