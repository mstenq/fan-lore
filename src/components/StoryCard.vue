<template>

<div class="column col-4">
    <div class="card">
        <div class="card-image">
            <router-link :to="{name: 'story', params: {id: 2}}"><img :src="story.image" class="img-responsive"></router-link>
        </div>
        <div class="card-header">
        <div class="card-title h5">{{story.title}}</div>
        <div class="card-subtitle text-gray">By {{story.author}}</div>
        </div>
        <div class="card-body">
        {{story.description}}
        </div>
        <div class="card-footer">
         <router-link :to="{name: 'story', params: {id: 2}}"  class="btn btn-primary">Read</router-link>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: Object
  }
}
</script>

<style scoped>


</style>
