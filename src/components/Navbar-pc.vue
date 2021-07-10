<template>
    <nav>
        <v-app-bar app dark class="black white--text" height="75" id="toolbar-bg" elevation="100">
        <v-img
            src="@/assets/pihacks_logo.png"
            max-width='50'
            contain
        ></v-img>
        <span id='main_text' class="white--text font-weight-bold d-none d-sm-flex">PIHACKS</span>
        <v-spacer></v-spacer>
        <div>
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
    </nav>
</template>

<script>

export default {
    data() {
        return {
            links: [
                { text: 'Easter Egg', route : '/'},
                { text: 'Break the Code', route : '/break-the-code'},
            ]
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
