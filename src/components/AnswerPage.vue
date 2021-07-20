<template>
  <div class="for-flexing px-3 py-16 px-sm-6" id="easteranspg">
    <v-card class="card-body px-3 py-3 px-sm-6 py-sm-4" elevation="24">
      <div class="contt">
        <div class="pb-4">
          <div class="verdict pb-2 font-weight-bold text-center">
            Verdict:
            <span
              v-if="verdict == 'Accepted'"
              class="green--text text--darken-3"
              >Accepted</span
            >
            <span v-else class="red--text text--darken-3">{{ verdict }}</span>
          </div>
          <div class="desc text-center" v-html="htmlout"></div>
        </div>
        <div v-if="!noimage" class="img-cont pb-2">
          <img class="img" id="ConImg" />
        </div>
      </div>
    </v-card>
  </div>
</template>



<script>
import twemoji from "twemoji";
export default {
  name: "AnswerPage",
  props: {
    verdict: {
      type: String,
      default: "Invalid",
    },
    desc: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: null,
    },
    Updt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      TryCnt: 0,
      noimage: true,
    };
  },
  computed: {
    htmlout() {
      return twemoji.parse(this.desc, {
        folder: "svg",
        ext: ".svg",
      });
    },
  },
  watch: {
    Updt: function () {
      let loc = this.img;
      if (this.verdict == "Wrong") {
        loc = require("../assets/TryAgainMemes/try" + this.TryCnt + ".jpg");
      }

      if (loc != null) {
        document
          .getElementsByClassName("card-body")[0]
          .classList.remove("noimage");
        this.noimage = false;
        let IMAGE = new Image();
        IMAGE.onload = () => {
          document.getElementById("ConImg").src = IMAGE.src;
          document
            .getElementsByClassName("easteranspg")[0]
            .dispatchEvent(new Event("ImagesLoaded"));
        };
        IMAGE.src = loc;
      } else {
        document
          .getElementsByClassName("card-body")[0]
          .classList.add("noimage");
        this.noimage = true;
        document
          .getElementsByClassName("easteranspg")[0]
          .dispatchEvent(new Event("ImagesLoaded"));
      }
      if (this.verdict == "Wrong") {
        this.TryCnt = (this.TryCnt + 1) % 8;
      }
    },
  },
};
</script>


<style>
.for-flexing {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.card-body {
  width: 600px;
  height: 350px;
  overflow: auto;
}
.card-body.noimage {
  height: auto;
  max-height: 350px;
}
.contt {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.img-cont {
  min-height: 0;
  flex: 1 1 auto;
  align-content: center;
}
.img {
  min-height: 200px;
  max-height: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.verdict {
  font-size: 32px;
}
.desc {
  font-size: 16px;
}

.emoji {
  height: 16px;
  width: auto;
}

@media only screen and (min-width: 600px) {
  .desc {
    font-size: 18px;
  }

  .emoji {
    height: 18px;
    width: auto;
  }
}
@media only screen and (min-width: 900px) {
  .verdict {
    font-size: 40px;
  }
  .desc {
    font-size: 20px;
  }

  .emoji {
    height: 20px;
    width: auto;
  }
  .card-body {
    width: 700px;
    height: 400px;
  }
  .card-body.noimage {
    max-height: 400px;
  }
}
@media only screen and (min-width: 1100px) {
  .verdict {
    font-size: 50px;
  }
  .desc {
    font-size: 25px;
  }

  .emoji {
    height: 25px;
    width: auto;
  }
  .card-body {
    width: 800px;
    height: 450px;
  }
  .card-body.noimage {
    max-height: 450px;
  }
}
@media only screen and (min-width: 1500px) {
  .verdict {
    font-size: 58px;
  }
  .img12 {
    /* flex-grow: 1; */
    /* max-width: 300px; */
    /* justify-content: center; */
    align-self: center;
  }
  .desc {
    font-size: 27px;
  }
  .emoji {
    height: 27px;
    width: auto;
  }
  .card-body {
    width: 1000px;
    height: 500px;
  }
  .card-body.noimage {
    max-height: 500px;
  }
}
</style>