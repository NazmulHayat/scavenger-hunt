<template>
    <div>
      <div id="answer-content">
        <AnswerPage
        :verdict="verdict"
        :desc="desc"
        :img="image"
        :Updt="UpdtAns"
        />
        <v-btn fab class="close-btn" @click="CloseAnswer()" small>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <InkTran class="ink"/>
      <div class="text-main">
          <typewriter
          :type-interval="100"
          :replace-interval="1000"
          class="typewriter pt-2"
          >
          <div class="welcome-text welcome-text1 
          welcome-text2 welcome-text3
          ">Easter Egg Hunt</div>
          </typewriter>
      </div>
      <v-container class="pp px-6 d-flex flex-column justify-center
            " fluid>
      <v-card
        class="main-body
        px-5 py-4
        px-md-8 px-md-10
        "
        outlined color="transparent" elevation="24">
        <v-row align="center" dense
        justify="center">
          <v-col>
            <v-form class="FORM">
              <v-text-field
                v-model="uid"
                label="Your ID:"
                required
                class="text-field"
                color="black"                
              ></v-text-field>
              <v-text-field
                v-model="ans"
                label="Answer"
                required
                class="text-field"
                color="black"                
              ></v-text-field>
            </v-form>
            <div class="amra pt-6" style="display:flex; justify-content:center">
              <button type="button" @click="submit()" class="button69 font-weight-bold" x-large>
                 <div class="btn-cont">
                  <v-progress-circular
                    indeterminate
                    class="loading"
                  ></v-progress-circular>
                  <div class="inside-text"> Submit </div>
                 </div>
                 
              </button>
            </div>
          </v-col>
        </v-row>
        
      </v-card> 
      </v-container>
        <Popup />
    </div>
</template>

<script>
import typewriter from '../components/typewriter.vue' 
import Popup from '../components/Popup.vue'
import AnswerPage from "../components/AnswerPage.vue"
import InkTran from "../components/InkBlotTransition2.vue"
export default {
    name:"Home",
    components : {typewriter, Popup, AnswerPage, InkTran},
    data: () => ({
        uid:"",
        ans:"",
        dialog: false,
        text: "Easter Egg Hunt",
        loaded: false,
        animating: false,
        verdict: "Wrong",
        desc : "",
        image: null,
        UpdtAns: false
    }),
    methods: {
      submit() {
        if(this.animating) return; // allow only one submit
        this.animating = true;
        //Show User Data Loading
        document.getElementsByClassName('loading')[0].classList.add("visible");
        document.getElementsByClassName('inside-text')[0].style.visibility = "hidden";

        //Start Loading Data
        var apibody = {
          uid: this.uid,
          ans: this.ans
        }
        fetch("https://easter-egg-api.herokuapp.com/easter-egg-hunt",{
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(apibody)
        })
        .then((data)=>{return data.json()})
        .then((res)=>{
          this.verdict=res.verdict;
          this.desc=res.message;
          var vuesux=false;
          if(res.image!=null && vuesux)
            this.image=require(res.image);
          else this.image=null;
          this.DataLoaded();
        }) 
      },
      DataLoaded(){
        document.getElementsByClassName('loading')[0].classList.remove("visible");
        document.getElementsByClassName('inside-text')[0].style.visibility = "visible";
        let ink = document.getElementsByClassName("ink")[0];

        ink.addEventListener("transitionend",()=>{ //add lisnter b4 transition
          this.animating = false;
          document.getElementById('answer-content').classList.add('visible'); //Finally show data
        },{once:true});

        ink.dispatchEvent(new Event("StartTransition"));
      },
      CloseAnswer(){
        if(this.animating) return;
        this.animating = true;
        let AnswerContent = document.getElementById('answer-content');
        let tempFunc = (e)=>{
          if(e.target !== e.currentTarget) return;
          this.animating = false;
          document.getElementsByClassName("ink")[0].dispatchEvent(new Event("StartTransition"));
          AnswerContent.removeEventListener("transitionend",tempFunc);
        }
        AnswerContent.addEventListener("transitionend",tempFunc)//add lisnter b4 transition
        document.getElementById('answer-content').classList.remove('visible');
      }
    }
}

// function media1200(x) {
//   if(x.matches) {
//     console.log("REACHED 1200px");
//     this.text = "Easter Egg Hunt";
//   }
// }

// var x = window.matchMedia("(max-width: 1200px)")
// media1200(x) // Call listener function at run time
// x.addListener(media1200);

</script>


<style>
.text-field.theme--dark.v-text-field > .v-input__control > .v-input__slot:before{
  color:black;
  border-color: black;
  border-width: 1.25px;
  background-color: black;

}
.text-field.theme--dark.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before{
  color:black;
  border-color: black;
}

.text-field.theme--dark.v-text-field> .v-input__control > .v-input__slot > .v-text-field__slot > input{
  color:black;
  font-weight: 500;
}
/* .text-field.theme--dark.v-input input, .theme--dark.v-input textarea{
  color:black;
} */
.v-input.text-field>.v-input__control>.v-input__slot>.v-text-field__slot>.v-label{
  color:black;
  font-size: 20px;
  font-weight: 900;
}

.btn-cont{
  display: flex;
  justify-content: center;
}

.close-btn{
  position: absolute;
  top: 16px;
  right:16px;
}

.loading {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}
.loading.visible {
  visibility: visible;
  opacity: 1;
}

#answer-content{
  position: fixed;
  height: 100%;
  width:100%;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
  transition-timing-function: ease-out;
  background-image: url("../assets/modal-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ink{
  z-index: 3;
}

#answer-content.visible{
  visibility: visible;
  opacity: 1;
}

  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }

  .main-body{
    animation: transitionIn 1.5s;
  }

@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap');

.button69 {
  background-color: black;
  color: rgb(255, 255, 255);
  padding: 8px 32px;
  height: auto;
  font-size: 22px;
  /* font-family: 'Press Start 2P', cursive; */
  font-family:sans-serif;
  /* border: 1px solid #ffffff; */
      background-color: #352a2a;
    color: rgb(255, 255, 255);
  border-radius: 30px 30px 30px 30px;
  /* margin-bottom: 20px; */
}
.button69:hover {
    background-color: #000000;
    color: rgb(255, 255, 255);
}

@font-face{
  font-family: 'Amithen';
  src: url(../assets/Amithen.ttf);
}

@font-face{
  font-family: 'Freshman';
  src: url(../assets/Freshman.ttf);
}

@font-face{
    font-family: 'Cream';
    src: url(../assets/Cream_Cake.otf);
}

@font-face{
    font-family: 'Vintage';
    src: url(../assets/vintage.otf);
}

.main-body{
  width:100%;
  margin-left: auto;
  margin-right: auto;
  max-width:700px;
  
}



.pp{
  height: 100%;
  position:fixed;
  top:0;
  left:0;
}

.answer{
  outline: 3px solid black;
}

.text-main{
    display: flex;
    padding: 20px;
    justify-content: center;
    text-align: center;
}

.welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-family: Freshman !important;
    font-size: 50px;
    color: black;
}

@keyframes blinking {
    0%{opacity:0;}
    100%{opacity: 0;}
}

.typewriter.content *:last-child::after {
    animation: blinking 0.5s steps(2,jump-none) 0s infinite alternate !important;
}


  
@media only screen and (min-width: 580px) {
  .welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-size: 60px;
  }
}
@media only screen and (min-width: 690px) {
  .welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-size: 70px;
  }
}

@media only screen and (min-width: 1000px) {
  .main-body{
    max-width: 800px;
  }
  .welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-size: 80px;
  }
}

@media only screen and (max-height: 590px) {
  
  .pp{
    position:initial;
    top:initial;
    left:initial;
    height: 70vh;
  }
}

</style>

