<template>
  <div class="authenticate">
    <div class="container text-center">
      
     <amplify-authenticator></amplify-authenticator>
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AmplifyEventBus } from 'aws-amplify-vue'


export default {
  name: 'Authenticate',
  data () {
    return {

    }
  },
  async beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        router.push('home')
      }
    });
  }
}

<style scoped>


</style>
