<template>
  <div id="app">  
    
    <nav-bar/>   
    
    <router-view/>

    <footer class="container">
      <hr>
      <p class="text-center">Fan-Lore.com &copy; 2019</p>
    </footer>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
      NavBar
  },
  data () {
      return {
          
      }
  },
    async beforeCreate() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.login(user);
    } catch (err) {
      this.logout();
    }
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.getUserInfo();
      } else {
        this.logout()
      }
    });
  },
  computed:{
    ...mapState([
      'signedIn',
      'user'
    ])
  },
  methods: {
    ...mapMutations([
      'login',
      'logout'
    ]),
    
    getUserInfo: async function(){
      let user = await Auth.currentAuthenticatedUser();
      this.login(user);
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Bree+Serif');
$primary-color: #2e5bec;
$dark-color: #3e396b;
@import "~spectre.css/src/spectre";


html{
  padding-top: 60px;
}



.container{
      max-width: 1280px;
      padding-top: 20px;
}

footer{
  max-width: 1280px;
}

footer hr {
    border-top: 1px solid #e8e8e8;
    border-bottom: none;
    margin: 30px 0;
}
</style>
