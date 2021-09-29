<template>
<div>
    <div class="cardContainer">
      <Card v-for="(value, i) in portfolioPieces" :key='portfolioPieces[value]' :image='portfolioPieces[i].src' :title='portfolioPieces[i].title' :name='portfolioPieces[i].name' :imageIndex='i'></Card>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Card from '../components/Card.vue'

export default({
  data(){
    return{
      
    }
  },
  components:{
    Card,
  },
  method:{
    
  },
  computed:{
    ...mapState(['portfolioPieces'])
  },
})
</script>
