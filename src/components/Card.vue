<template>
<div>
    <img :src='image' />
    <p>{{ title }}</p>
</div>
</template>

<script>
export default{
    props:{
        name: String,
        image: String,
        imageIndex: Number,
        title: String,
    },
    data(){
        return{

        }
    }
}
</script>
