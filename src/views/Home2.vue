<template>
    <div class="wrapper">
        <v-btn @click="run()" class="btnn">Click1</v-btn>
        <v-btn @click="Change()" class="btnn">Click2</v-btn>
        <AnswerPage
        :verdict="verdict"
        :desc="desc"
        :img="image"
        :Updt="UpdtAns"
        />
    </div>
</template>

<script>
import AnswerPage from '../components/AnswerPage.vue';
var image1 = require("../assets/egg symbol.png");
var image2= null;
export default {
    components:{
        AnswerPage
    },
    data(){
        return {
            verdict: "Accepted",
            desc : "they ask you how you are, and you just have to say you’re fine when you’re not really fine, but you just can’t get into it, because they would never understand.",
            image: image1,
            UpdtAns: false
        }
    },
    methods:{
        run(){
            if(this.verdict=="Accepted") this.image=(this.image==image1?image2:image1);
            this.UpdtAns=!this.UpdtAns;
        },
        Change(){
            this.verdict=(this.verdict=="Accepted"?"Wrong":"Accepted");
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
    z-index: 100;
}
</style>
