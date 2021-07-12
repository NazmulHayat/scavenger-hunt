<template>
    <v-container class='py-16'>
        <v-row justify="center">
            <div class="text-h2 font-weight-bold">Verdict: 
                <span v-if="verdict=='Accepted'" class="green--text text--darken-3">Accepted</span>
                <span v-else class="red--text text--darken-3">{{verdict}}</span>
            </div>
        </v-row>
        <div class="mm pt-16 mt-10 mx-16 px-10">
            <div class="txt pr-10"> 
                <div class="editable text-h3 font-weight-bold">
                    {{desc}}
                </div>
            </div>
            <img class="IMAGE pl-16" src="../assets/never.jpg">
        </div>
    </v-container>
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
    }
}
</script>H


<style>
    .memeimg{
        max-width: 100%;
    }

    .mm{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        height: auto;
    }

    .IMAGE{
        height: 400px;
        max-width: 100%;
        align-self: flex-start;
        /* padding-bottom: 2vh; */
    }

</style>