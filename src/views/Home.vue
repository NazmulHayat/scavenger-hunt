<template>
  <div>
    <div id="answer-content">
      <AnswerPage
        :verdict="verdict"
        :desc="desc"
        :img="image"
        :Updt="UpdtAns"
        class="easteranspg"
      />
      <v-btn fab class="close-btn" @click="CloseAnswer()" small>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <InkTran class="ink" />
    <div class="text-main">
      <typewriter
        :type-interval="100"
        :replace-interval="1000"
        class="typewriter pt-2"
      >
        <div class="welcome-text">Easter Egg Hunt</div>
      </typewriter>
    </div>
    <v-container class="pp px-6 d-flex flex-column justify-center" fluid>
      <v-card
        class="main-body px-5 py-4 pt-8 px-md-8 px-md-10"
        outlined
        color="transparent"
        elevation="24"
      >
        <v-row align="center" dense justify="center">
          <v-col>
            <v-form class="FORM" ref="form" @submit.prevent="submit">
              <v-text-field
                v-model="uid"
                label="Your ID:"
                :rules="[...rules.MinLength, ...rules.invalid, UIdCheck]"
                class="text-field"
                color="black"
                :readonly="animating"
              ></v-text-field>
              <v-text-field
                v-model="ans"
                label="Answer:"
                :rules="[...rules.required, ...rules.invalid]"
                class="text-field"
                color="black"
                :readonly="animating"
              ></v-text-field>
               <div
              class="amra pt-4 pb-2"
              style="display: flex; justify-content: center"
            >
              <button
                type="submit"
                class="button69 font-weight-bold"
                x-large
              >
                <div class="btn-cont">
                  <v-progress-circular
                    indeterminate
                    class="loading"
                  ></v-progress-circular>
                  <div class="inside-text">Submit</div>
                </div>
              </button>
            </div>
            </v-form>
           
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <Popup />
    <v-snackbar v-model="snackbar" :timeout="5000"
      >{{ errormsg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template></v-snackbar
    >
  </div>
</template>

<script>
import typewriter from "../components/typewriter.vue";
import Popup from "../components/Popup.vue";
import AnswerPage from "../components/AnswerPage.vue";
import InkTran from "../components/InkBlotTransition2.vue";
export default {
  name: "Home",
  components: { typewriter, Popup, AnswerPage, InkTran },
  data: () => ({
    uid: "",
    ans: "",
    uidisInvalid: false,
    invaliduid: "",
    animating: false,
    verdict: "Wrong",
    desc: "",
    image: null,
    UpdtAns: false,
    errormsg: "",
    snackbar: false,
    transitionloaded: false,
    rules: {
      required: [(v) => !!v || "Required."],
      MinLength: [(v) => v.length >= 5 || "Min length of 5."],
      invalid: [
        (v) =>
          /^(([a-z]|[0-9]|[_.]))*$/.test(v) || "input contains invalid characters",
      ],
    },
  }),
  methods: {
    UIdCheck(v) {
      if (v == this.invaliduid && this.uidisInvalid)
        return "The given User ID is invalid";
      return true;
    },
    submit() {
      //validations
      if (!this.$refs.form.validate()) return;
      if (this.animating) return; // allow only one submit
      this.animating = true;
      //Show User Data Loading
      document.getElementsByClassName("loading")[0].classList.add("visible");
      document.getElementsByClassName("inside-text")[0].style.visibility =
        "hidden";

      //Start Loading Data
      let apibody = {
        uid: this.uid,
        ans: this.ans,
      };
      let code = null;
      fetch("https://easter-egg-api.herokuapp.com/easter-egg-hunt", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apibody),
      })
        .then((data) => {
          code = data.status;
          if (data.status == 200 && typeof Storage != undefined) {
            localStorage.uid = this.uid;
          }
          return data.json();
        })
        .then((res) => {
          if (code == 418) {
            this.uidisInvalid = true;
            this.invaliduid = this.uid;
            this.$refs.form.validate();
          }
          if (res.verdict != "Accepted" && res.verdict != "Wrong") {
            this.errormsg = res.verdict + ": " + res.message;
            this.snackbar = true;
            document
              .getElementsByClassName("loading")[0]
              .classList.remove("visible");
            document.getElementsByClassName("inside-text")[0].style.visibility =
              "visible";
            this.animating = false;
            return;
          }

          this.verdict = res.verdict;
          this.desc = res.message;
          this.image = res.image;
          document.getElementsByClassName("easteranspg")[0].addEventListener(
            "ImagesLoaded",
            () => {
              if (this.transitionloaded) this.DataLoaded();
              else {
                document.getElementsByClassName("ink")[0].addEventListener(
                  "ImagesLoaded",
                  () => {
                    this.DataLoaded();
                  },
                  { once: true }
                );
              }
            },
            { once: true }
          );
          this.UpdtAns = !this.UpdtAns;
        });
    },
    DataLoaded() {
      document.getElementsByClassName("loading")[0].classList.remove("visible");
      document.getElementsByClassName("inside-text")[0].style.visibility =
        "visible";
      let ink = document.getElementsByClassName("ink")[0];

      ink.addEventListener(
        "transitionend",
        () => {
          //add lisnter b4 transition
          this.animating = false;
          document.getElementById("answer-content").classList.add("visible"); //Finally show data
        },
        { once: true }
      );

      ink.dispatchEvent(new Event("StartTransition"));
    },
    CloseAnswer() {
      if (this.animating) return;
      this.animating = true;
      let AnswerContent = document.getElementById("answer-content");
      let tempFunc = (e) => {
        if (e.target !== e.currentTarget) return;
        this.animating = false;
        document
          .getElementsByClassName("ink")[0]
          .dispatchEvent(new Event("StartTransition"));
        AnswerContent.removeEventListener("transitionend", tempFunc);
      };
      AnswerContent.addEventListener("transitionend", tempFunc); //add lisnter b4 transition
      document.getElementById("answer-content").classList.remove("visible");
    },
  },
  mounted() {
    if (typeof Storage != undefined) {
      if (localStorage.uid) this.uid = localStorage.uid;
    }
    document.getElementsByClassName("ink")[0].addEventListener(
      "ImagesLoaded",
      () => {
        this.transitionloaded = true;
      },
      { once: true }
    );
  },
};
</script>


<style>
/* click korle je animation */
.text-field.theme--dark.v-input {
  color: black;
}
/* default */
.text-field.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  color: rgba(53, 53, 53, 0.5);
  border-color: rgba(53, 53, 53, 0.5);
  border-width: 1.25px;
  background-color: rgba(53, 53, 53, 0.5);
}
/* hover korle */
.text-field.theme--dark.v-text-field:not(.v-input--has-state):hover
  > .v-input__control
  > .v-input__slot:before {
  color: rgba(53, 53, 53, 0.5);
  border-color: rgba(53, 53, 53, 0.5);
  border-width: 1.25px;
  background-color: rgba(53, 53, 53, 0.5);
}

.text-field.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  > input {
  color: black;
  font-size: 22px;
  font-weight: 500;
}
.v-input.text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  > .v-label {
  color: black;
  font-size: 20px;
  font-weight: 900;
  margin-top: -5px;
}

/* Error texts */
.text-field.error--text.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  color: rgba(53, 53, 53, 0.5);
  border-color: rgba(53, 53, 53, 0.5);
  border-width: 1.25px;
  background-color: rgba(53, 53, 53, 0.5);
}
.text-field.error--text.theme--dark.v-text-field:not(.v-input--has-state):hover
  > .v-input__control
  > .v-input__slot:before {
  color: rgba(53, 53, 53, 0.5);
  border-color: rgba(53, 53, 53, 0.5);
  border-width: 1.25px;
  background-color: rgba(53, 53, 53, 0.5);
}

.text-field.error--text.error--text.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  > input {
  color: #000000;
  font-weight: 500;
}
.v-input.text-field.error--text
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  > .v-label {
  color: #000000 !important;
  font-size: 20px;
  font-weight: 900;
}

.btn-cont {
  display: flex;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
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

#answer-content {
  position: fixed;
  height: 100%;
  width: 100%;
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
.ink {
  z-index: 3;
}

#answer-content.visible {
  visibility: visible;
  opacity: 1;
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-body {
  animation: transitionIn 1.5s;
}

.button69 {
  background-color: black;
  color: rgb(255, 255, 255);
  padding: 8px 32px;
  height: auto;
  font-size: 22px;
  /* font-family: 'Press Start 2P', cursive; */
  font-family: sans-serif;
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

@font-face {
  font-family: "Freshman";
  src: url("../assets/Freshman.ttf");
}

.main-body {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}

.pp {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.answer {
  outline: 3px solid black;
}

.text-main {
  display: flex;
  padding: 20px;
  justify-content: center;
  text-align: center;
}

.welcome-text {
  font-family: Freshman;
  font-size: 50px;
  color: black;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.typewriter.content *:last-child::after {
  animation: blinking 0.5s steps(2, jump-none) 0s infinite alternate !important;
}

@media only screen and (min-width: 580px) {
  .welcome-text {
    font-size: 60px;
  }
}
@media only screen and (min-width: 690px) {
  .welcome-text {
    font-size: 70px;
  }
}

@media only screen and (min-width: 1000px) {
  .main-body {
    max-width: 800px;
  }
  .welcome-text {
    font-size: 80px;
  }
}

@media only screen and (max-height: 590px) {
  .pp {
    position: initial;
    top: initial;
    left: initial;
    height: 70vh;
  }
}
</style>

