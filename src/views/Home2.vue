<template>
    <div class="wrapper">
        <AnswerPage/>
    </div>
</template>

<script>
import AnswerPage from '../components/Popup.vue';

export default {
    components:{
        AnswerPage
    },
    data(){
        return {
            img: img
        }
    },
}

</script>

<style scoped>
.wrapper{
    height:100%;
    width:100%;
}
</style>
