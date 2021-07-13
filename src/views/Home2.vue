<template>
    <div class="wrapper">
        <v-btn @click="run()" class="btnn">Click</v-btn>
        <AnswerPage class="ink"/>
    </div>
</template>

<script>
import AnswerPage from '../components/InkBlotTransition2.vue';

export default {
    components:{
        AnswerPage
    },
    data(){
        return {
            img: img
        }
    },
    methods:{
        run(){
            document.getElementsByClassName("ink")[0].dispatchEvent(new Event("StartTransition"));
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
