<template>
<router-link :to="{ name: 'portfolio-piece'}">
    <div>
     <img :src='image' />
     <p>{{ title }}</p>
    </div>
</router-link>
</template>

<script>
export default{
    props:{
        image: String,
        imageIndex: Number,
        title: String,
        name: String,
    },
    data(){
        return{
            newName: this.title.toLowerCase().split(" ").join('-')
        }
    }
}
</script>
