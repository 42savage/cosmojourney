<template>
<div class="openModal" v-if="openModal">
    <div class="first">
        <a>{{currentElement.data[0].secondary_creator}}</a>
        <p>{{currentElement.data[0].description | long}}</p>
    </div>
    <div class="second">
        <div>
            <h1>{{currentElement.data[0].title}}</h1>
            <h4>{{currentElement.data[0].date_created}}</h4>
        </div>
            <button class="closeBtn" @click="closeModal">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                    <g>
	                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		            c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		            C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		            s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                    </g>
                </svg>
            </button>
        <!-- <img class="modal-image" v-bind:src="currentElement.links[0].href"> -->
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + currentElement.links[0].href + ')' }"></div>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
            if(value.length > 190){
                let result = value.slice(0, 190);
                return result;
            }
            return value;
        }
    }
}
</script>

<style scoped lang="scss">
.image{
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.openModal{
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: white;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column-reverse;
        overflow:hidden;
    h1{
        font-size: 24px;
        margin-right: 36px;
    }
    h4{
        font-size: 14px;
    }
    h1, h4, a, p{
        padding: 4px 8px;
    }
}
.closeBtn{
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
.modal-image{
    max-width: 100%;
    max-height: 300px;
}
.first{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
}
.first, .second{
    width: 100%;
}
@media (min-width: 600px){
    .image{
        height: 400px;
    }
    .first{
        p{
            padding: 16px 8px;
        }
    }
}
@media (min-width: 1024px){
        .image{
        height: 600px;
    }
}
@media (min-width: 1900px) {
        .image{
            height: 600px;
        }
        .openModal{
            width: 50%;
        }
}
</style>