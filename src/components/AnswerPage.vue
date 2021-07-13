<template>
    <div class="for-flexing">
        <v-card class="card-body 
                        pa-6" elevation="24">
            <div class="contt">
                <div class="text-h4
                        pb-2
                        font-weight-bold
                        text-center">Verdict: 
                <span v-if="verdict=='Accepted'" class="green--text text--darken-3">Accepted</span>
                <span v-else class="red--text text--darken-3">{{verdict}}</span>
                </div>
                
                <div class="text-body-1 text-center">{{desc}}</div>
                <div v-if="verdict=='Wrong'" class="img">
                    <!-- <v-img :src='bleh' contain></v-img> -->
                </div>
                <div v-else-if="image!=null" class="img">
                    <v-img contain :src='image'></v-img>
                </div>
            </div>
        </v-card>
    </div>
</template>



<script>
export default {
    name : "AnswerPage",
    props: {
        verdict: {
            type : String,
            default : "Default Verdict"
        },
        desc: {
            type: String,
            default : "Placeholder text"
        },
        image: {
            type: String,
            default: null
        }
    },
    data(){
        return {
            TryAgainTxt: [
                'You can do this!',
                'Try Again',
                'Try a bit harder',
                "Keep trying, you are gonna make it"
            ],
            bleh: null,
            TryCnt:0
        }
    },
    mounted() {
        document.getElementsByClassName('for-flexing')[0].addEventListener('ChangeMeme', ()=>{
            this.asm();
        })
    },
    methods: {
        asm () {
            this.bleh = require('../assets/TryAgainMemes/try' + this.TryCnt +'.jpg' );
            this.TryCnt=(this.TryCnt+1)%8;
        }
    }
}
</script>


<style>

    .for-flexing{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .card-body{
        max-width: 600px;
        max-height: 300px;
    }
    .img{
        flex-grow: 1;
    }
    .contt{
        display: flex;
        flex-direction: column;
        max-width: 600px;
        max-height: 300px;
    }

</style>