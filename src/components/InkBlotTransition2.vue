<template>
  <div id="transition">
    <canvas id="transition-canvas"></canvas>
    <div id="tran-bg"></div>
  </div>
</template>

<script>
var images = [];
const frames = 25;
class AnimLoop {
  constructor(fps, el) {
    this.el = el;
    this.Interval = 1000 / fps;
    this.delta = 1;
    this.StartTime = performance.now();
    this.frame = 0;
    this.ctx = this.el.getContext("2d");
    this.loop = () => {
      this.ctx.clearRect(0, 0, this.el.width, this.el.height);

      var scale = Math.max(
        window.innerWidth / images[this.frame].width,
        window.innerHeight / images[this.frame].height
      );
      var x = (window.innerWidth - images[this.frame].width * scale) / 2;
      var y = (window.innerHeight - images[this.frame].height * scale) / 2;
      this.ctx.drawImage(
        images[this.frame],
        x,
        y,
        images[this.frame].width * scale,
        images[this.frame].height * scale
      );

      var now = performance.now();
      var TimeCompleted = now - this.StartTime;
      if (TimeCompleted >= this.Interval) {
        this.StartTime = now - (TimeCompleted % this.Interval);
        this.frame += this.delta;
        if (this.frame <= -1 || this.frame >= frames) {
          if (this.frame >= frames)
            document.getElementById("tran-bg").classList.add("visible");
          this.ctx.clearRect(0, 0, this.el.width, this.el.height);
          document
            .getElementById("transition")
            .dispatchEvent(new Event("transitionend"));
          return;
        }
      }

      requestAnimationFrame(this.loop);
    };
  }
  Forwardloop() {
    this.StartTime = performance.now();
    this.frame = 0;
    this.delta = 1;
    this.loop();
  }
  Backwardloop() {
    document.getElementById("tran-bg").classList.remove("visible");
    this.StartTime = performance.now();
    this.frame = 24;
    this.delta = -1;
    this.loop();
  }
}

export default {
  components: {},
  data() {
    return {
      LoadCnt: 0,
      mntd: false,
      el: null,
      evnt: false,
      Aloop: null,
      flag: false,
      animating: false,
    };
  },
  mounted() {
    document.getElementById("tran-bg").style.backgroundImage =
      "url(" + images[frames - 1].src + ")";
    this.el = document.getElementById("transition");
    let canvas = document.getElementById("transition-canvas");
    canvas.style.height = window.screen.height + "px";
    canvas.style.width = window.screen.width + "px";
    canvas.height = window.screen.height;
    canvas.width = window.screen.width;
    this.mntd = true;
    this.el.addEventListener("ImagesLoaded", () => {
      this.Aloop = new AnimLoop(20, canvas);
      this.evnt = true;
      // this.el.dispatchEvent(new Event("StartTransition"));
    });
    this.el.addEventListener("transitionend", () => {
      this.animating = false;
      if (!this.flag) this.el.classList.remove("visible");
      // this.el.dispatchEvent(new Event("StartTransition"))
    });
    this.el.addEventListener("StartTransition", () => {
      if (this.animating) return;
      this.animating = true;
      if (this.flag) this.Aloop.Backwardloop();
      else {
        this.el.classList.add("visible");
        this.Aloop.Forwardloop();
      }
      this.flag = !this.flag;
    });
    if (this.LoadCnt == frames && !this.evnt) {
      this.el.dispatchEvent(new Event("ImagesLoaded"));
    }
  },
  created() {
    for (var i = 0; i < frames; i++) {
      images[i] = new Image();
      images[i].onload = this.LoadChecker;
      images[i].src = require("../assets/TransitionFrames/img" +
        (i + 1) +
        ".png");
    }
  },
  methods: {
    LoadChecker() {
      this.LoadCnt++;
      if (this.mntd && !this.evnt && this.LoadCnt == frames) {
        this.el.dispatchEvent(new Event("ImagesLoaded"));
      }
    },
  },
};
</script>

<style scoped>
#transition {
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  position: fixed;
}
#transition.visible {
  opacity: 1;
  visibility: visible;
}
#tran-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#tran-bg.visible {
  opacity: 1;
  visibility: visible;
}
</style>
