<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column col-9">
          <h1>{{story.title}}</h1>
          <p>By <a href="#">{{story.author}}</a></p>
          <h3>{{chapter.title}}</h3>
          <p class="chapter-text" v-html="chapter.text"></p>

          <ul class="pagination">
            <li class="page-item page-prev">
              <a href="#">
                <div class="page-item-subtitle">Previous</div>
                <div class="page-item-title h5">Chapter 1</div>
              </a>
            </li>
            <li class="page-item page-next">
              <a href="#">
                <div class="page-item-subtitle">Next</div>
                <div class="page-item-title h5">Chapter 3</div>
              </a>
            </li>
          </ul>


        </div>
        <div class="column col-3">
          <div class="card">
            <div class="card-image">
            <img :src="story.image" class="img-responsive">
            </div>
            <div class="card-body">
              {{story.description}}
            </div>
        </div>

        <ul class="menu">
          <!-- menu header text -->
          <li class="divider" data-content="CHAPTERS">
          </li>
          <!-- menu item standard -->
          <li class="menu-item" v-for="chapter in story.chapters" v-bind:key="chapter.id">
            <a href="#">{{chapter.title}}</a>
          </li>          
        </ul>



        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedList from '@/components/FeaturedList.vue'

export default {
  name: 'story',
  components: {
    FeaturedList
  },
  data (){
    return {
      story:{
        author: "John Doe",
        id: 2,
        title: "The Avengers",
        description: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...",
        image: "https://picsum.photos/302/400/?image=1041",
        chapters:[
          {
            id: 1,
            title: "Chapter 1"
          },
          {
            id: 2,
            title: "Chapter 2"
          },
          {
            id: 3,
            title: "Chapter 3"
          }
        ]
      },
      chapter:{
        id: 1,
        title: "Chapter 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie orci mauris, dictum iaculis est rutrum in. Nullam ac rutrum nulla. Nunc ultrices pharetra lectus quis auctor. Aliquam porttitor tortor a tellus facilisis, vel convallis purus rhoncus. Praesent sodales vitae nunc vitae condimentum. Aliquam dui tellus, fermentum vitae elit ut, tincidunt hendrerit turpis. Aliquam eget enim nec diam consectetur feugiat in viverra neque. Mauris at pharetra enim, eget tempor velit. Vivamus in nibh vitae lacus gravida tempor id quis lorem. Duis hendrerit nec mauris id eleifend.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie orci mauris, dictum iaculis est rutrum in. Nullam ac rutrum nulla. Nunc ultrices pharetra lectus quis auctor. Aliquam porttitor tortor a tellus facilisis, vel convallis purus rhoncus. Praesent sodales vitae nunc vitae condimentum. Aliquam dui tellus, fermentum vitae elit ut, tincidunt hendrerit turpis. Aliquam eget enim nec diam consectetur feugiat in viverra neque. Mauris at pharetra enim, eget tempor velit. Vivamus in nibh vitae lacus gravida tempor id quis lorem. Duis hendrerit nec mauris id eleifend.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie orci mauris, dictum iaculis est rutrum in. Nullam ac rutrum nulla. Nunc ultrices pharetra lectus quis auctor. <br><br>Aliquam porttitor tortor a tellus facilisis, vel convallis purus rhoncus. Praesent sodales vitae nunc vitae condimentum. Aliquam dui tellus, fermentum vitae elit ut, tincidunt hendrerit turpis. Aliquam eget enim nec diam consectetur feugiat in viverra neque. Mauris at pharetra enim, eget tempor velit. Vivamus in nibh vitae lacus gravida tempor id quis lorem. Duis hendrerit nec mauris id eleifend.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie orci mauris, dictum iaculis est rutrum in. Nullam ac rutrum nulla. Nunc ultrices pharetra lectus quis auctor. Aliquam porttitor tortor a tellus facilisis, vel convallis purus rhoncus. Praesent sodales vitae nunc vitae condimentum. Aliquam dui tellus, fermentum vitae elit ut, tincidunt hendrerit turpis. Aliquam eget enim nec diam consectetur feugiat in viverra neque. Mauris at pharetra enim, eget tempor velit. Vivamus in nibh vitae lacus gravida tempor id quis lorem. Duis hendrerit nec mauris id eleifend."
      }
    }
  }
}
</script>

<style scoped>

h1{
  font-family: 'Bree Serif', serif;
  font-size: 60px
}

h3{
  font-family: 'Bree Serif', serif;

}


.menu {
    margin-top: 20px;
}

.chapter-text{
  font-size: 18px;
  line-height: 30px;
}

</style>
