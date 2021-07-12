<template>
    <v-dialog max-width="700px" >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                slot="activator"
                class="info-btn"
                fab
                v-bind="attrs"
                v-on="on"
                dark
            ><v-icon large>mdi-information-outline</v-icon></v-btn>
        </template>
        <v-card class="pa-4">
            <h2> All you need to do is Give Up </h2>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

}

</script>


<style scoped>
.info-btn{
    position: absolute;
    bottom: 16px;
    right:16px;
}
</style>