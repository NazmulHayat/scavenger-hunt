<template>
  <div class="main">
    <v-carousel
    continuous="true"
    hide-delimiters
    progress="true"
    progress-color="white"
    v-model="activeSlide" 
    style="width:100%"
    height="100%"
    class="mx-16"
    :show-arrows="false">
      <v-carousel-item
      v-for="(question,i) in questions" :key="i"
      >
        <v-card 
        id="fk-card"
        class="CARD mx-auto mt-16 pa-8"
        max-width="900"
        elevation="24">
          <h1 class="text-5xl pb-4"> {{question}} </h1>
          <v-textarea
            label="Your Answer"
            class="ans text-md-h5 text-h6"
            rows="10"
            v-model="answers[i]"
            outlined
            no-resize
          > 
          </v-textarea>
          <div class="btns">
            <v-btn v-if="i!= 0" @click="activeSlide--" class="button69 font-weight-bold mr-4" x-large>
              Back
            </v-btn>
            <v-btn v-if="i != questions.length-1" @click="activeSlide++" class="button69 font-weight-bold"  x-large>
              Next
            </v-btn>
            <v-btn v-if="i == questions.length-1" class="button69 font-weight-bold"  x-large>
              Finish
            </v-btn>
          </div>
        </v-card> 
      </v-carousel-item>
    </v-carousel> 
  </div>
</template>

<script>

export default{
  data : () => ({
    activeSlide: 0,
    questions : [
      "Who would love Calfornia?", "All along I believe time will find you?",
      "Whats wrong with you mate?", "Do you know which is the world's largest continent?"
    ],
    answers : ["", "", "", "", "", "", "", ""]
  })
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pontano+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto&display=swap');
  .main{
    display:flex;
    justify-content: center;
    margin-left: 64px;
    margin-right: 64px;
  }
  .CARD{
    /* background-color: #121212; */
    background-color: transparent;
    font-family: 'Merriweather', serif;
    letter-spacing: 2px;
  }
  .button69 {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 8px 32px;
    height: auto;
    font-family: 'Roboto', sans-serif;
    border: 2px solid #555555;
    /* margin-bottom: 20px; */
  }
  .button69:hover {
      background-color: #ffffff;
      color: rgb(0, 0, 0);
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
</style>