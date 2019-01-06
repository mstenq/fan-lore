<template>
<header class="navbar">
    <section class="navbar-section">
    <router-link :to="{name: 'home'}" class="navbar-brand mr-1 text-bold">Fan Lore</router-link> /
    <router-link :to="{name: 'home'}" class="navbar-brand mr-2 ml-1 text-bold">HFY</router-link>
    <a href="..." class="btn btn-link">Communities</a>
    <a href="..." class="btn btn-link">Stories</a>
    <a href="..." class="btn btn-link">Users</a>
    <a href="..." class="btn btn-link">Contests</a>
    <a href="..." class="btn btn-link">News</a>
    </section>
    
    <section class="navbar-section">
    <div class="input-group input-inline">
        <input class="form-input" type="text" placeholder="search">
        <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
    </div>
    <router-link  v-if="!signedIn" :to="{name: 'authenticate'}" class="btn btn-primary ml-2">Login / Signup</router-link>
    <a href="#" v-if="signedIn" class="btn btn-primary ml-2">Add Story <i class="icon icon-plus"></i></a>

    <div v-if="signedIn" class="dropdown dropdown-right ml-2">
        <a class="btn btn-link dropdown-toggle" tabindex="0">{{user.username}} <i class="icon icon-caret"></i></a>
        <ul class="menu text-left">
            <li class="divider" data-content="COMMUNITY">
            <li class="menu-item"><a href="#dropdowns">Setup</a></li>
            <li class="menu-item"><a href="#dropdowns">Story Settings</a></li>
            <li class="divider" data-content="ACCOUNT">
            <li class="menu-item"><a href="#dropdowns">Profile</a></li>
            <li class="menu-item"><a href="#dropdowns">My Faves</a></li>
            <amplify-sign-out></amplify-sign-out>
        </ul>
        </div>
            
    </section>
</header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  data () {
      return {
          
      }
  },
  computed:{
      ...mapState([
          'signedIn',
          'user'
      ])
  }
}
</script>

<style scoped>

.navbar {
    padding: 10px;
    background-color: whitesmoke;
    position: fixed;
    width: 100%;
    top: 0;
}


</style>
