<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column col-9">
          <featured-list/> 
        </div>
        <div class="column col-3">
          <news-list/>
          <div class="ad bg-gray text-center mt-2">Adblock</div>
        </div>
      </div>
    </div>


<amplify-connect :query="query">
  <template slot-scope="{loading, data, errors}">
    <div v-if="loading">Loading...</div>

    <div v-else-if="errors.length > 0">{{errors}}</div>

    <div v-else-if="data">
      <div v-for="item in data.listStorys.items">{{item.id}} - {{item.title}}</div>
    </div>
  </template>
</amplify-connect>




  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedList from '@/components/FeaturedList.vue'
import NewsList from '@/components/NewsList.vue'
import { components } from 'aws-amplify-vue';

const query = `query {
    listStorys {
      items {
        id
        title
      }
    }
  }`;

export default {
  name: 'home',
  components: {
    FeaturedList, NewsList, ...components
  },
  computed: {
    query() {
      return this.$Amplify.graphqlOperation(query);
    }
  }
}
</script>

<style scoped>

.ad{
  padding: 100px 0;
}

</style>
