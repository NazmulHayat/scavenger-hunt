<template>
    <div class="for-flexing
    px-3 py-16
    px-sm-6">
        <v-card class="card-body
        px-3 py-3
        px-sm-6 py-sm-4
        " elevation="24">
            <div class="contt">
                <div class="
                pb-4
                ">
                    <div class="verdict
                            pb-2
                            font-weight-bold
                            text-center">Verdict: 
                    <span v-if="verdict=='Accepted'" class="green--text text--darken-3">Accepted</span>
                    <span v-else class="red--text text--darken-3">{{verdict}}</span>
                    </div>
                    <div class="desc text-center">{{desc}}</div>
                </div>
                <div v-if="image!=null" class="img-cont
                pb-2
                ">
                    <img class="img" :src="image" id="CorImg">
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
            if(this.verdict=="Wrong"){
                this.image=require('../assets/TryAgainMemes/try' + this.TryCnt +'.jpg');
                this.TryCnt=(this.TryCnt+1)%8;
            }
        }
    },
    watch:{
        image: (val)=>{
            if(val==null){
                document.getElementsByClassName("card-body")[0]
                    .classList.add("noimage");
            }
            else{
                document.getElementsByClassName("card-body")[0]
                    .classList.remove("noimage");
            }
        }
    }
}
</script>


<style>

.for-flexing{
    position: absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width:100%;
}

.card-body{
    width: 600px;
    height: 350px;
    overflow: scroll;
}
.card-body.noimage{
    height: auto;
    max-height: 350px;
}
.contt{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.img-cont{
    min-height:0;
    flex: 1 1 auto;
    align-content: center;
}
.img{
    min-height: 100px;
    max-height:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.verdict{
    font-size:32px;
}

.desc{
    font-size: 16px;
}

@media only screen and (min-width: 600px) {

    .desc{
        font-size: 18px;
    }
}

@media only screen and (min-width: 900px) {
    .verdict{
        font-size:40px;
    }

    .desc{
        font-size: 20px;
    }
    .card-body{
        width: 700px;
        height: 400px;
    }
    .card-body.noimage{
        max-height: 400px;
    }
}
@media only screen and (min-width: 1100px) {
    .verdict{
        font-size:50px;
    }

    .desc{
        font-size: 25px;
    }
    .card-body{
        width: 800px;
        height: 450px;
    }
    .card-body.noimage{
        max-height: 450px;
    }
}
@media only screen and (min-width: 1500px) {
    .verdict{
        font-size:58px;
    }

    .desc{
        font-size: 27px;
    }
    .card-body{
        width: 1000px;
        height: 500px;
    }
    .card-body.noimage{
        max-height: 500px;
    }
}
</style>