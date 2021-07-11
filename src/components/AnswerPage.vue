<template>
    <v-container class='py-16'>
        <v-row justify="center">
            <div class="text-h4">Verdict: 
                <span v-if="verdict=='Accepted'" class="green--text text--darken-3">Accepted</span>
                <span v-else class="red--text text--darken-3">{{verdict}}</span>
            </div>
        </v-row>
        <v-row justify="center" class="pt-8">
            <div class="text-h6">{{desc}}</div>
        </v-row>
        <v-row v-if="image!=null" justify="center" class="pt-8">
            <img class="memeimg" :src="image">
        </v-row>
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
</style>