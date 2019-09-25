<template>
<!-- <div class="loading-bar">
    <div class="loader">Loading...</div>
</div> -->
<div class="fullscreen">
<div class='circle'>
  <div class='inner'></div>
</div>
<h3>Loading...</h3>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$b: #030416;
  .fullscreen{
    background: #030416;
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h3{
    color: white;
  }
  .circle{
    width:325px;
    height:325px;
    display:block;
    background:#fff;
    border-radius:500%;
    position:relative;
    animation:rotation 2s linear infinite;
    @keyframes rotation{
      0%{
        transform:rotate(0deg);
      }
      100%{
        transform:rotate(360deg);
      }
    }
    .inner{
      width:200px;
      height:200px;
      background:$b;
      position:absolute;
      left:50%;
      top:50%;
      transform:translateX(-50%) translateY(-50%);
      border-radius:100%;
      box-shadow:0 -130px 0 -75px $b;
      animation:switch 8s ease-in-out infinite;
      @keyframes switch{
        0%{
          top:50%;
          transform:translateX(-50%) translateY(-50%);
          width:200px;
          height:200px;
          box-shadow:0 -130px 0 -75px $b;
          
        }
        25%{
          top:50%;
          transform:translateX(-50%) translateY(-50%);
          width:200px;
          height:200px;
          box-shadow:0 -130px 0 -75px $b;
          
        }
        50%{
          top:calc(100% - 55px);
          width:50px;
          height:50px;
          box-shadow:0 -130px 0 75px $b;
          transform:translateX(-50%) translateY(0);
          
        }
        75%{
          top:calc(100% - 55px);
          width:50px;
          height:50px;
          box-shadow:0 -130px 0 75px $b;
          transform:translateX(-50%) translateY(0);
          
        }
        100%{
          top:50%;
          transform:translateX(-50%) translateY(-50%);
          width:200px;
          height:200px;
          box-shadow:0 -130px 0 -75px $b;
          
        }
        
      }
    }
  }
// $color-loader: rgb(45, 47, 95);
// .loading-bar{
//   position: absolute;
//   z-index: 5;
//   background: white;
//   width: 100vw;
//   height: 100vh;
// }
// .loader {
//   width: 250px;
//   height: 50px;
//   line-height: 50px;
//   text-align: center;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   font-family: helvetica, arial, sans-serif;
//   text-transform: uppercase;
//   font-weight: 900;
//   color: $color-loader;
//   letter-spacing: 0.2em;
  
//   &::before, &::after {
//     content: "";
//     display: block;
//     width: 15px;
//     height: 15px;
//     background: $color-loader;
//     position: absolute;
//     animation: load .7s infinite alternate ease-in-out;
//   }
  
//   &::before {
//     top: 0;
//   }
  
//   &::after {
//     bottom: 0;
//   }
// }

// @keyframes load {
//   0% { left: 0; height: 30px; width: 15px }
//   50% { height: 8px; width: 40px }
//   100% { left: 235px; height: 30px; width: 15px}
// }
</style>