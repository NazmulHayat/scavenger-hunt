<template>
    <div class="wrapper">
        <v-btn @click="run()" class="btnn">Click</v-btn>
        <AnswerPage
        verdict="Accepted"
        desc="they ask you how you are, and you just have to say you’re 
        fine when you’re not really fine, but you just can’t get into it, 
        because they would never understand."
        :image="image"
        id="anspg"
        />
    </div>
</template>

<script>
import AnswerPage from '../components/AnswerPage.vue';
var image = require("../assets/egg symbol.png");
export default {
    components:{
        AnswerPage
    },
    data(){
        return {
            image: image
        }
    },
    methods:{
        run(){
            document.getElementById("anspg").dispatchEvent(new Event("ChangeMeme"));
        }
    }
}

</script>

<style scoped>
.wrapper{
    height:100%;
    width:100%;
}
.btnn{
    position:absolute;
    left:0;
    top:0;
    z-index: 10;
}
</style>
