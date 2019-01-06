<template>
<div class="tile">
    <div class="tile-content">
        <p class="tile-title"><router-link :to="{name: 'story', params: {id: 2}}">{{data.title}}</router-link></p>
        <p class="tile-subtitle">{{data.description}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'SmallTile',
  props: {
    data: Object
  }
}
</script>

<style scoped>

.tile-title {
    margin-top: 10px;
    margin-bottom: 5px;
}

</style>
