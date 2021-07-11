<template>
    <div class="wrapper">
        <div class="main-content">
            <v-btn @click="ShowData()">Click Me</v-btn>
        </div>
        <div class="answer-content">
            <AnswerPage
                verdict="Accepted"
                desc="DANG BOIIIII"
            />
            <v-btn @click="HideData()">Click Me</v-btn>
        </div>
        
        <div class="cd-transition-layer"> 
            <div class="bg-layer"></div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";
import AnswerPage from "../components/AnswerPage.vue";
jQuery(document).ready(function($){
    var transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children();
    var frameProportion = 1.78,
        frames = 25;
    var fixing=false;
    window.addEventListener("isAnimating",()=>{
        fixing = true;
        window.requestAnimationFrame(Frame);
    });
    window.addEventListener("AnimationStop",()=>{
        fixing = false;
    });
    function Frame(){
        setLayerDimensions();
        if(fixing)
            window.requestAnimationFrame(Frame);
    }
    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight*1.2;
            layerWidth = layerHeight*frameProportion;
        }
        // console.log(layerHeight, layerWidth);
        transitionBackground.css({
            'width': layerWidth*frames+'px',
            'height': layerHeight+'px',
        });
    }
})
export default {
    components:{
        AnswerPage
    },
    data(){
        return {
            
        }
    },
    methods:{
        ShowData(){
            const el=document.getElementsByClassName("cd-transition-layer")[0];
            window.dispatchEvent(new Event("isAnimating"));
            el.classList.add("visible");
            el.classList.add("opening");
            el.addEventListener("animationend",()=>{
                window.dispatchEvent(new Event("AnimationStop"));
                document.getElementsByClassName("answer-content")[0]
                    .classList.add("visible");
            },{once:true});
        },
        HideData(){
            const el=document.getElementsByClassName("answer-content")[0];
            el.classList.add("hide");
            el.addEventListener("transitionend",()=>{
                const el2=document.getElementsByClassName("cd-transition-layer")[0];
                window.dispatchEvent(new Event("isAnimating"));
                el2.classList.add("closing");
                el2.addEventListener("animationend",()=>{
                    window.dispatchEvent(new Event("AnimationStop"));
                    el.classList.remove("visible");
                    el.classList.remove("hide");
                    el2.classList.remove("visible");
                    el2.classList.remove("opening");
                    el2.classList.remove("closing");
                },{once:true});
            },{once:true});
        }
    },
}

</script>

<style scoped>
@import url("../assets/css/style.css");
.wrapper{
    height:100%;
}
.main-content{
    position: absolute;
}
.answer-content{
    background-image: url("../assets/img/modal-bg.jpg");
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s, visibility 1s;
    
}
.answer-content.visible{
    opacity: 1;
    visibility: visible;
}
.answer-content.visible.hide{
    opacity: 0;
    visibility: hidden;
}
</style>
