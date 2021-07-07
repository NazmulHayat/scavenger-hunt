<template>
    <nav>
    <v-app-bar dark app height="75" class="black white--text" id="toolbar-bg" elevation="100">
        <v-img
            src="@/assets/pihacks_logo.png"
            max-width='50'
            contain
        ></v-img>
        <span id='main_text' class="white--text font-weight-bold">PIHACKS</span>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer" fixed temporary>
      <v-list nav dense>
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

export default {
    data() {
        return {
            links: [
                { text: 'Easter Egg', route : '/', icon:"mdi-home"},
                { text: 'Break the Code', route : '/break-the-code', icon:"mdi-calendar"},
            ],
            drawer: false,
            group: null,

        }
    }
}

</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    
    #BTN{
        font-size: 1.25em;
    }
    #main_text{
        padding-left: 20px;
        /* font-family: 'Big Shoulders Stencil Display', cursive; */
        font-family: 'Russo One', sans-serif;
        letter-spacing: 1.5px;
        font-size: 2.5em;
        letter-spacing: 4.5px;
    }
</style>
