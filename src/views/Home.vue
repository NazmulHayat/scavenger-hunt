<template>
    <div class="">
      <img class="img" src="../assets/img/modal-bg.jpg">
      <div class="text-main">
          <typewriter
          :replace="replace"
          :type-interval="100"
          :replace-interval="1000"
          class="typewriter pt-2"
          >
          <div class="welcome-text welcome-text1 welcome-text2 welcome-text3 font-weight-medium"> Easter Egg Hunt</div>
          </typewriter>
      </div>
      <v-container class="pp d-flex flex-column justify-center">
      <v-card
        class="main-body" outlined color="transparent" elevation="24">
        <v-row align="center"
        justify="center">
          <v-col>
            <v-form class="FORM">
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Your ID:</label>
              </div>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Answer</label>
              </div>
            </v-form>
            <div class="amra pt-10" style="display:flex; justify-content:center">
              <button type="button" @click = "submit()" class="button69 font-weight-bold" x-large>
                 <i class="loading fa fa-refresh fa-spin"></i>
                <div class="inside-text"> Submit </div>
              </button>
            </div>
          </v-col>
        </v-row>
        
      </v-card> 
      </v-container>
      <div class="overlay px-8">
        <Popup />
      </div>
    </div>
</template>

<script>
import typewriter from '../components/typewriter.vue' 
import Popup from '../components/Popup.vue'
export default {
    components : {typewriter, Popup},
    // components: {},
    data: () => ({
        dialog: false,
        text: "Easter Egg Hunt",
        loaded: false
    }),
    methods: {
      submit() {
        document.getElementsByClassName('loading')[0].style.visibility = "visible";
        document.getElementsByClassName('inside-text')[0].style.visibility = "hidden";
        
        setTimeout(()=>{
          // document.getElementsByClassName('loading')[0].style.visibility = "hidden";
          document.getElementsByClassName('img')[0].classList.add('visible');
        }, 2000)

        setTimeout(()=>{
          document.getElementsByClassName('img')[0].classList.remove('visible');
          document.getElementsByClassName('loading')[0].style.visibility = "hidden";
          document.getElementsByClassName('inside-text')[0].style.visibility = "visible";
        }, 10000)
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
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

.fa {
  margin-top: 5px;
  margin-left: -10px;
}

.loading {
  position: absolute;
  visibility: hidden;
}

.img{
  position: fixed;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s;
}

.img.visible{
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

.overlay{
  display: flex;
  justify-content: flex-end;
}

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
  width: 45vw;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 50px;
  padding-bottom: 50px;
  /* top: 200px; */
  /* background: url('../assets/123.jpg'); */
  
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #000000;
  outline: 0;
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #240606, hsl(5, 34%, 46%));
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #240606;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}

/* demo */
.pp{
  height: 70vh;
  /* height: 100%; */
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
    /* font-family: 'Lobster Two', cursive; */
    font-size: 80px;
    color: black
    /* font-family: im fell double pica,serif !important; */
}

@keyframes blinking {
    0%{opacity:0;}
    100%{opacity: 0;}
}

.typewriter.content *:last-child::after {
    animation: blinking 0.5s steps(2,jump-none) 0s infinite alternate !important;
}
    

/* media queries */

@media only screen and (max-width: 1450px) {
  .welcome-text.welcome-text1.welcome-text2.welcome-text3{
      font-family: Freshman !important;
      font-size: 70px;
      color: black
  }
}

@media only screen and (max-width: 1300px) {
  .main-body{
    width: 60vw;
  }
}

@media only screen and (max-width: 930px) {
  .main-body{
    width: 70vw;
  }
}

@media only screen and (max-width: 800px) {
  .main-body{
    width: 70vw;
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

@media only screen and (max-width: 700px) {
  .main-body{
    width: 80vw;
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

@media only screen and (max-width: 560px) {
  .button69{
    font-size: 18px;
  }
}

@media only screen and (max-width: 490px) {
  .welcome-text.welcome-text1.welcome-text2.welcome-text3{
    font-size: 55px;
  }
  .main-body{
    width: 80vw;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 25px;
    padding-bottom: 30px;
  }
}


</style>

