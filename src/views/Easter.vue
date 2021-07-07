<template>
  <v-container
    class="main-body pt-10 px-16 mt-16"
  >
    <v-form class="FORM">
        <v-textarea
        label="Your ID"
        no-resize
        v-model="ID"
        rows="1"
        outlined
        class="id text-md-h5 text-h6"
      ></v-textarea>

      <v-textarea
        label="Your Answer"
        class="answer text-md-h5 text-h6"
        rows="12"
        v-model="ans"
        outlined
        no-resize
      > 
      </v-textarea>
      <div class="amra" style="display:flex; justify-content:center">
        <v-btn @click="check()" class="button69 font-weight-bold"  x-large>
          Submit
        </v-btn>
      </div>
    </v-form>
    
  </v-container>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    data: () => ({
      sheet: false,
      ans : "",
      ID : "",
      accepted : -1
    }),
    name: 'Home',
    components: {
    },
    methods : {
      check() {
        var ok = 1;
        //answer is ryt
        if(ok){
          this.accepted = 1;
        }
        //answer wrong
        else{
          console.log("WRONG");
          this.accepted = 0;
        }
      },
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  .main-body{
    /* display: flex;
    justify-content: center; */
    
    width: 100%;
    height: 100%;
    max-width: 900px;
    font-family: 'Press Start 2P', cursive;
  }
  .Btn{
    color:transparent;
  }
  .button69 {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 8px 32px;
    height: auto;
    font-family: 'Press Start 2P', cursive;
    border: 2px solid #555555;
    /* margin-bottom: 20px; */
  }
  .button69:hover {
      background-color: #ffffff;
      color: rgb(0, 0, 0);
  }
</style>
