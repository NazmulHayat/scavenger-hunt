<template>
    <div class="for-flexing">
        <v-card class="card-body pa-8" elevation="24">
            <div class="verdict text-h3 font-weight-bold pb-4">Verdict: 
                <span v-if="verdict=='Accepted'" class="green--text text--darken-3">Accepted</span>
                <span v-else class="red--text text--darken-3">{{verdict}}</span>
            </div>
            <div class="msg">
                <span v-if="verdict=='Wrong'" class="text-h4 text--darken-2"> 
                    <v-img class="img mt-4" v-bind:src='bleh' contain></v-img>
                </span>
                <span v-else class="text-h4 text--darken-2"> 
                    <div> {{desc}} </div>
                    <span v-if="image!=null">
                        <v-img class="img mt-4" contain :src='image'></v-img>
                    </span>
                </span>
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
            bleh: null
        }
    },
    copmuted:{

        text: function(){
            console.log("askdfjhaksdhjf");
            return this.TryAgainTxt[Math.trunc(Math.random() * this.TryAgainTxt.length)]
        },
        rand_tries: function(){
            console.log('../assets/try' + Math.trunc(Math.random() * (7) + 1) + '.jpg');
            return require('../assets/try' + Math.trunc(Math.random() * (7) + 1) + '.jpg');
        }
    },
    mounted() {
        document.getElementsByClassName('for-flexing')[0].addEventListener('change', ()=>{
            this.asm();
        })
    },
    methods: {
        asm () {
            this.bleh = require('../assets/try' + Math.trunc(Math.random() * (7) + 1) + '.jpg');
        }
    }
}
</script>


<style>

    .for-flexing{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .card-body{
        max-width: 600px;
        margin: auto;
        /* margin-top: 20vh;  */
        /* cant center vertically :)   */

    }

    .verdict{
        text-align: center;
    }

    .IMAGE{
        height: 400px;
        max-width: 100%;
        align-self: flex-start;
        /* padding-bottom: 2vh; */
    }

    .msg{
        text-align: center;
    }

</style>