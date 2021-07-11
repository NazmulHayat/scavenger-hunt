<template>
    <div>
        <div class="text-main">
            <typewriter
            :replace="replace"
            :type-interval="100"
            :replace-interval="1000"
            class="typewriter"
            >
            <div class="welcome-text welcome-text1 welcome-text2 welcome-text3 font-weight-medium">Welcome to Easter Egg Hunt</div>
            </typewriter>
        </div>
        <v-container fill-height 
      class="main-body pt-10 px-16 mt-16"
      >
        <v-row align="center"
        justify="center">
          <v-col>
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
                rows="4"
                v-model="ans"
                outlined
                no-resize
                auto-grow=true
              > 
              </v-textarea>
              <div class="amra" style="display:flex; justify-content:center">
                <button class="button69 font-weight-bold" x-large>
                  Submit
                </button>
              </div>
            </v-form>
          </v-col>
        </v-row>
        
      </v-container>
    </div>
</template>

<script>
import typewriter from '../components/typewriter.vue' 
export default {
    components : {typewriter},
    data: () => ({
        replace: [
        { from: "Vue", to: "React?" },
        { from: "Typewriter React?", to: "Joking, it`s Vue!" },
        ],
    }),
}

</script>


<style>

.button69 {
  background-color: black;
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

@font-face{
  font-family: 'Amithen';
  src: url(../assets/Amithen.ttf);
}

@font-face{
    font-family: 'Cream';
    src: url(../assets/Cream_Cake.otf);
}

.text-main{
    display: flex;
    padding: 20px;
    justify-content: center;
}

.welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-family: Cream !important;
    font-size: 150px;
    color: black
    /* font-family: im fell double pica,serif !important; */
}

@keyframes blinking {
    0%{opacity:1;}
    100%{opacity: 0;}
}

.typewriter.content *:last-child::after {
    animation: blinking 0.5s steps(2,jump-none) 0s infinite alternate !important;
}
    


</style>

