<template>
<div class="openModal" v-if="openModal">
    <div class="first">
        <h1>{{currentElement.data[0].title}}</h1>
        <h4>{{currentElement.data[0].date_created}}</h4>
        <a>{{currentElement.data[0].secondary_creator}}</a>
        <p>{{currentElement.data[0].description | long}}</p>
    </div>
    <div class="second">
        <img v-bind:src="currentElement.links[0].href">
    </div>
    <button class="closeBtn" @click="closeModal">x</button>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    name: 'modal',
    computed:{
        ...mapState(['openModal']),
        ...mapGetters(['currentElement'])
    },
    methods:{
        ...mapActions(['closeModal'])
    },
    filters:{
        long: function(value){
            console.log(value)
            if(value.length > 460){
                let result = value.slice(0, 460)+'...';
                return result;
            }
            return value;
        }
    }
}
</script>

<style scoped lang="scss">
.openModal{
    position: fixed;
    z-index: 2;
    top: 15%;
    width: 80%;
    height: 70%;
    background: white;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    .first{
        width: 100%;
        height: 100%;
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-right: 20px;
    }
    .second{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.closeBtn{
    position: absolute;
    right: 0px;
    top: 0px;
    background: none;
    border: none;
    font-size: 22px;
    width: 22px;
    height: 22px;
    outline: none;
    cursor: pointer;
    &:hover{
        font-weight: bold;
    }
}
</style>