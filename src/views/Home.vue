<template>
<div>
    <div class="cardContainer">
      <Card v-for="(value, i) in image" :key='image[value]' :image='image[i].src' :title='image[i].title'></Card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default({
  data(){
    return{
      image:[
        {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w', 
        title:'Detroit Red Wings Wallpaper'},
        {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1613673442119-WDZ1N1C438IIWDQ7NW99/8285_VL_SpringTraining_CountdownGraphics_Icon.jpg?format=500w', 
        title:'Detroit Tigers'},
        {src:'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1603154441526-ESK401ETU8XDBRBT0EUZ/_Icons_AnimationsMagglioHomeRun.jpg?format=500w', 
        title:'Detroit Tigers 1'}]
    }
  },
  components:{
    Card,
  }
})
</script>
