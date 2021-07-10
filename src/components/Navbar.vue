<template>
    <nav>
        <v-app-bar app height="75" class="black white--text" id="toolbar-bg" elevation="100">
          <v-img
              src="@/assets/pihacks_logo.png"
              max-width='50'
              contain
          ></v-img>
            <span id='main_text' class="white--text font-weight-bold">PIHACKS</span>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>

            <div v-if="!isMobile">
            <v-list-tile v-for="link in links" :key="link.text" class="p-0 text-none">
                <v-list-tile-action>
                    <v-btn router v-if="link.route != '/schedule'" :to="link.route" text color="white" x-large id="BTN" class="font-weight-bold text-none">
                        {{link.text}} 
                    </v-btn>
                    <v-btn v-else text color="white" x-large id="BTN" class="font-weight-bold text-none" onclick="console.log('asdasd');document.getElementById('img').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});">
                        {{link.text}}
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </div>
        </v-app-bar>

    <v-navigation-drawer
      v-model="drawer" fixed temporary>
      <v-list nav>
        <v-list-item-group v-model="group" active-class="light-blue--text text--accent-4">
          <v-list-item v-for="(link,i) in links" :key="i" :to="link.route">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-subtitle-1">{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
const BreakOff=1080;

export default {
    data() {
        return {
            isMobile:false
        }
    },
    methods:{
        CheckMobile()
        {
            window.addEventListener("resize",()=>{
                this.isMobile = document.body.clientWidth <= BreakOff;
            });
            this.isMobile = document.body.clientWidth <= BreakOff;
        }
    },
    created()
    {
        this.CheckMobile();
    }
}

</script>


<style>
</style>
