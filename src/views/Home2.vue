<template>
    <div class="wrapper">
        <div class="answer-content">
            <AnswerPage
                verdict="Accepted"
                desc="DANG BOIIIII Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut perferendis quisquam nesciunt et aliquam consequatur, inventore debitis quasi optio error explicabo magnam porro eum beatae, vel voluptates pariatur libero." 
                :image='img'
            />
        </div>
    </div>
</template>

<script>
import AnswerPage from '../components/AnswerPage.vue';
var img = require('../assets/never.jpg');
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
        
    }
}

</script>