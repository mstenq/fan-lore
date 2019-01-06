<template>
<div class="featured-list">
    <h3>Featured</h3>
    <div class="columns">
        <story-card v-for="story in stories" v-bind:key="story.id" :story="story"/>
    </div>
</div>
</template>

<script>
import StoryCard from '@/components/StoryCard.vue'

export default {
  name: 'FeaturedList',
  components: {
      StoryCard
  },
  data () {
      return {
          stories:[
              {
                  title: "The Avengers",
                  author: "John Doe",
                  image: "https://picsum.photos/302/400/?image=1041",
                  id: 1,
                  description: "Earth's Mightiest People joined forces to take on threats that were too big for any one hero to tackle..."
              },
              {
                  title: "The Avengers",
                  author: "John Doe",
                  image: "https://picsum.photos/302/400/?image=1042",
                  id: 2,
                  description: "Earth's Mightiest People joined forces to take on threats that were too big for any one hero to tackle..."
              },
              {
                  title: "The Avengers",
                  author: "John Doe",
                  image: "https://picsum.photos/302/400/?image=1043",
                  id: 3,
                  description: "Earth's Mightiest People joined forces to take on threats that were too big for any one hero to tackle..."
              }
          ]
      }
  }
}
</script>

<style scoped>


</style>
