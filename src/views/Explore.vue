<template>
<div class="container">
    <navigation/>
    <h1>Screen size detector</h1>
    <p>Your screen size is {{resX}} x {{resY}}</p>
    <div class="containser">
        <button @click="checkNow">Check again</button>
        <input type="text">
    </div>
</div>
</template>

<script>
import navigation from '../components/navigation'
export default {
    name: 'Explore',
    data(){
        return{
            resX: null,
            resY: null
        }
    },
    components:{
        navigation
    },
    mounted(){
        this.resX = window.innerHeight;
        this.resY = window.innerWidth;
    },
    methods:{
        checkNow(){
            this.resX = window.innerHeight;
            this.resY = window.innerWidth;
        }
    }
}
</script>

<style scoped lang="scss">
h1{
    text-align: center;
    color: darkcyan;
}
p{
    text-align: center;
    font-weight: bold;
}
button{
    border: 2px solid darkcyan;
    background: none;
    color: darkcyan;
    width: 90px;
    height: 40px;
    &:focus{
        background: darkcyan;
        color: white;
    }
}
.containser{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 24px 0;
}
</style>