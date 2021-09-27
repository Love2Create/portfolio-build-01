<template>
<div>
    <img class="square" :src="image" />
    <p>{{ title }}</p>
</div>
</template>

<script>

export default({
    data(){
        return{
            title: 'Detroit Red Wings Wallpapers',
            image: 'https://images.squarespace-cdn.com/content/v1/5de91a6a40de837e3d0f7afe/1622074420814-N7694HZ2JBL642C0ORSH/Icons_SquareDRWwallpaper_02.jpg?format=500w',
        }
    }
})
</script>

<style scoped>
.square{
    width: 300px;
}
</style>