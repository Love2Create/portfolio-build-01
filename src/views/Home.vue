<template>
  <div class="cardContainer">
    <Card class="card"></Card>
    <Card class="card"></Card>
    <Card class="card"></Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components:{
    Card
  }
}

</script>

<style scoped>
div.cardContainer{
  display: block;
  width: 100%;
  /* border: 10px solid green; */
  background-color: black;
}
.card{
  display: block;
  color: white;
  text-align: center;
  border: 2px solid yellow;
  width: 30%;
}
</style>