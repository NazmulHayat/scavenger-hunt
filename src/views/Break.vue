<template>
  <div class="main">
    <v-card 
    id="fk-card"
    class="CARD mx-auto mt-16 pa-8"
    max-width="900"
    elevation="24">
      <h1 class="text-5xl pb-4"> {{questions[index]}} </h1>
      <v-textarea
        label="Your Answer"
        class="ans text-md-h5 text-h6"
        rows="10"
        v-model="answer"
        outlined
        no-resize
      > 
      </v-textarea>
      <div class="btns">
        <v-btn v-if="index != 0" @click="back()" class="button69 font-weight-bold mr-4" x-large>
          Back
        </v-btn>
        <v-btn v-if="index != questions.length-1" @click="next()" class="button69 font-weight-bold"  x-large>
          Next
        </v-btn>
        <v-btn v-if="index == questions.length-1" @click="done()" class="button69 font-weight-bold"  x-large>
          Finish
        </v-btn>
        
      </div>
    </v-card> 
  </div>
</template>


<script>

export default{
  data : () => ({
    index : 0,
    answer : "",
    questions : [
      "Who would love Calfornia?", "All along I believe time will find you?",
      "Whats wrong with you mate?", "Do you know which is the world's largest continent?"
    ],
    answers : ["", "", "", "", "", "", "", ""]
  }),
  methods : {
    next() {
      this.answers[this.index] = this.answer;
      this.index++;
      this.answer=this.answers[this.index];

      document.getElementById("fk-card").animate([
        // keyframes
        { opacity: 0, transform: 'translateX(500px)' },
        { opacity: 1, transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 1000,
        iterations: 1
      });


    },
    back() {
      this.answers[this.index] = this.answer;
      this.index--;
      this.answer=this.answers[this.index];

      document.getElementById("fk-card").animate([
        // keyframes
        { opacity: 0, transform: 'translateX(-500px)' },
        { opacity: 1, transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 1000,
        iterations: 1
      });

    },
    done() {
      var cnt = 0;
      for(let i=0;i<this.questions.length;i++)
        if(this.answers[i] == "")
          cnt++;
        
      if(cnt == 0) {
        alert("Are you sure you want to submit?")
      }else{
        alert("You still have " + cnt + (cnt==1?" question":" questions") + " unanswered \n Do you want to submit?");
      }
    }
  }
}

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pontano+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto&display=swap');

  .CARD{
    animation : transitionIn 1.5s;
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
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
