<template>
  <div>
    <v-btn @click.stop="yey()" class="info-btn" fab dark
      ><v-icon large>mdi-information-outline</v-icon></v-btn>
  <v-dialog max-width="600px" v-model="show">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" class="info-btn" fab v-bind="attrs" v-on="on" dark
        ><v-icon large>mdi-information-outline</v-icon></v-btn
      >
    </template> -->

    <v-card  class="pa-4">
      <div class="WordSection1">
        <p
          class="MsoNormal font-weight-black"
          align="center"
          style="text-align: center"
        >
          <u
            ><span
              lang="EN-US"
              style="
                font-size: 20pt;
                line-height: 106%;
                mso-ansi-language: EN-US;
              "
              >PiHacks Easter Egg Hunt</span
            ></u
          >
        </p>
        <!-- <p> <span> {{msg}} </span> </p> -->

        <p class="MsoNormal" align="center" style="text-align: center">
          <span
            lang="EN-US"
            style="font-size: 12pt; line-height: 100%; mso-ansi-language: EN-US"
            >There are many easter eggs hidden throughout the event and it’s up
            to you to find them. Look out for this symbol:
          </span>
        </p>

        <p class="MsoNormal" align="center" style="text-align: center">
          <span
            lang="EN-US"
            style="
              font-size: 12pt;
              line-height: 106%;
              mso-ansi-language: EN-US;
              mso-no-proof: yes;
            "
            ><img
              width="47"
              height="65"
              src="https://github.com/twitter/twemoji/raw/master/assets/svg/2728.svg"
              v:shapes="Picture_x0020_1" alt="✨"/></span
          ><span
            lang="EN-US"
            style="font-size: 12pt; line-height: 100%; mso-ansi-language: EN-US"
          ></span>
        </p>
        <p class="MsoNormal" align="center" style="text-align: center">
          <span
            lang="EN-US"
            style="font-size: 12pt; line-height: 100%; mso-ansi-language: EN-US"
            >(The sparkle emoji)</span>
        </p>
        <p class="MsoNormal" align="center" style="text-align: center">
          <span
            lang="EN-US"
            style="font-size: 12pt; line-height: 106%; mso-ansi-language: EN-US"
            >As this will hint you to keep a sharp eye on what’s happening. Once
            you find the clue, input your username and answer in the input box
            to validate your answer.</span
          >

        </p>
        <b><p>
          <span lang="EN-US" style="font-size: 12pt; color: lightblue; line-height: 106%; mso-ansi-language: EN-US">
            *** When submitting the answer make sure that, 
            you don't write any capital letters or special characters on the answer. 
            Don't put any space in the answer. (Example: if the answer is “Black Panther”, write 
            “blackpanther” and not black panther) </span>
        </p></b>
      </div>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    yey () {
      this.show = !this.show;
    }
  },
  created() {
    console.log(window.localStorage);
    if(window.localStorage.getItem('init') == null){
      window.localStorage.setItem('init', 1);
      this.show = true;
    }
  },
  mounted() {

  }
};
</script>


<style scoped>
.info-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
.WordSection1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>