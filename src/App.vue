<template>
    <v-app>
      <div id="wrapper">
        <div class="home-content">
          <Navbar/>
          <v-main class="bg">
            <router-view/>
          </v-main>
        </div>
        <div class="background">
          <div id="particles-js" class="particles-js"></div>
        </div>
      </div>
        <Footer class="footer"/>
    </v-app>
</template>

<script>
var ParticleJsIsOn = 0;

import "particles.js";
const config = require("./particles.json");
import Navbar from '@/components/Navbar.vue';

import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    
  }),
  mounted(){
    document.getElementById("particles-js").style.height=window.screen.height + "px";
    document.getElementById("particles-js").style.width=window.screen.width + "px";
    if(ParticleJsIsOn)
      window.particlesJS('particles-js', config);
  }
}
</script>

<style>
  
  #wrapper{
    position: relative;
    height: 100%;
  }

  .home-content{
      position: relative;
      z-index: 100;
      padding-bottom:60px;
  }
  .background{
      top:0;
      z-index: 0;
      position: fixed;
  }
</style>