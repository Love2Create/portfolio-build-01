<template>
<div>
  <div class="mainContent">
    <div class="mainNav">
      <h1 id="brand">KAI CHEONG LU</h1>
      <router-link :to="{ name: 'home' }" class="link">Home</router-link>
      <router-link :to="{ name: 'about' }" class="link">About</router-link>
      <router-link :to="{ name: 'contact'}" class="link">Contact</router-link>
    </div>
  </div>
  <router-view id="routerView" />
</div>
</template>

<script>

</script>


<style scoped>
div.mainContent{
  padding: 20px;
}
div{
    font-family: Arial, Helvetica, sans-serif;

}
div.mainNav{
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.link{
  flex-direction: column;
  padding: 10px;
  /* display: none; */
}
h1#brand{
  display: flex;
  /* flex-shrink: 1;
  flex-grow: 1; */
  border: 1px solid red;
  justify-content: center;
  width: 60%;
}
#routerView{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  padding: 2px;
  margin: 0 auto;
}
</style>
