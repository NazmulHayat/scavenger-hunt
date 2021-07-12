<template>
    <div id="transition">
    </div>
</template>

<script>
var images = [];
const frames = 25;
class AnimLoop {
    constructor(fps, el) {
        this.el = el;
        this.Interval=1000/fps;
        this.delta=1;
        this.StartTime=performance.now();
        this.frame=0;
        this.id=null;
        this.loop=()=>{
            var now=performance.now();
            var TimeCompleted=now - this.StartTime;
            if(TimeCompleted>=this.Interval) {
                this.StartTime=now-(TimeCompleted%this.Interval);
                this.el.style.backgroundImage="url("+ images[this.frame].src + ")";
                this.frame+=this.delta;
                if(this.frame<=-1 || this.frame>=frames)
                {
                    if(this.delta<=-1)
                        this.el.classList.remove("visible");
                    this.el.dispatchEvent(new Event("transitionend"));
                    return;
                }
            }
            requestAnimationFrame(this.loop);
        }
    }
    // loop(){
    //     this.id = setInterval(()=>{
    //         this.el.style.backgroundImage="url("+ images[this.frame].src + ")";
    //         this.frame+=this.delta;
    //         if(this.frame<=-1 || this.frame>=frames)
    //         {
    //             if(this.delta<=-1)
    //                 this.el.classList.remove("visible");
    //             this.el.dispatchEvent(new Event("transitionend"));
    //             clearInterval(this.id);
    //         }
    //     },this.Interval);
    // }
    Forwardloop(){
        this.StartTime=performance.now();
        this.frame=0;
        this.delta=1;
        this.loop();
    }
    Backwardloop(){
        this.StartTime=performance.now();
        this.frame=24;
        this.delta=-1;
        this.loop();
    }
}

export default {
    components:{
    },
    data(){
        return {
            LoadCnt : 0,
            mntd : false,
            el :null,
            evnt:false,
            Aloop:null,
            flag:false,
            animating:false
        }
    },
    mounted(){
        this.el = document.getElementById("transition");
        this.mntd = true;
        this.el.addEventListener("ImagesLoaded",()=>{
            this.Aloop = new AnimLoop(20, this.el);
            this.evnt=true;
            // this.el.dispatchEvent(new Event("StartTransition"));
        })
        this.el.addEventListener("transitionend",()=>{
            this.animating = false;
            // this.el.dispatchEvent(new Event("StartTransition"))
        })
        this.el.addEventListener("StartTransition",()=>{
            if(this.animating) return;
            this.animating = true;
            if(this.flag)
                this.Aloop.Backwardloop();
            else{
                this.el.classList.add("visible");
                this.Aloop.Forwardloop();
            }
            this.flag=!this.flag;
        })
        if(this.LoadCnt==frames && !this.evnt){
            this.el.dispatchEvent(new Event("ImagesLoaded"));
        }
    },
    created(){
        for(var i=0;i<frames;i++){
            images[i] = new Image();
            images[i].onload = this.LoadChecker;
            images[i].src = require("../assets/img/Frames/img" + (i+1) + ".png");
        }
    },
    methods:{
        LoadChecker(){
            this.LoadCnt++;
            if(this.mntd && !this.evnt && this.LoadCnt==frames){
                this.el.dispatchEvent(new Event("ImagesLoaded"));
            }
        }
    }
}

</script>

<style scoped>
#transition{
    height:100%;
    width:100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    visibility: hidden;
    position:fixed;
}
#transition.visible{
    opacity: 1;
    visibility: visible;
}
</style>
