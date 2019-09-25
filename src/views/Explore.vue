<template>
<div class="container">
    <navigation/>
    <img src="https://rcdesign.com/wp-content/uploads/2017/11/how-long-build-professional-website.jpg" alt="">
    <h1>Page in build</h1>
    <router-link tag="a" to="/">back to app</router-link>
</div>
</template>

<script>
import navigation from '../components/navigation'
export default {
    name: 'Explore',
    components:{
        navigation
    }
}
</script>

<style>

</style>