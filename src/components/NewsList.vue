<template>
<div class="new-list">
    <h3>News</h3>
    <div class="panel">
        <div class="panel-body">
            <small-tile v-for="post in posts" v-bind:key="post.id" :data="post"/>
        </div>
    </div>
</div>
</template>

<script>
import SmallTile from '@/components/SmallTile.vue'

export default {
  name: 'NewList',
  components: {
      SmallTile
  },
  data () {
      return {
          posts:[
              {
                  title: "Contest Winners!",
                  id: 1,
                  description: "We have new contest winners, congrats to..."
              },
              {
                  title: "Welcome",
                  id: 2,
                  description: "Hola, welcome to the site..."
              }
          ]
      }
  }
}
</script>

<style scoped>

.tile-title {
    margin-top: 20px;
    margin-bottom: 5px;
}

</style>
