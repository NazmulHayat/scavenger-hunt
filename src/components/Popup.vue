<template>
    <v-dialog max-width="700px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                slot="activator"
                class="faq mx-2 text-h4 font-weight-bold"
                fab
                large
                v-bind="attrs"
                v-on="on"
                dark
            >?</v-btn>    
        </template>
        <v-card class="pa-4">
            <h2> All you need to do is Give Up </h2>
        </v-card>
    </v-dialog>
</template>

<script>
console.log("POPUP");
export default {

}

</script>


<style scoped>

</style>