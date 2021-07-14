<template>
    <v-dialog max-width="600px" >
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

<div class="WordSection1">
<p class="MsoNormal font-weight-black" align=center style='text-align:center'>
<u><span lang=EN-US style='font-size:20.0pt;line-height:106%;
mso-ansi-language:EN-US'>PiHacks Easter Egg Hunt<o:p></o:p></span></u></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
style='font-size:12.0pt;line-height:106%;mso-ansi-language:EN-US'>There are
many easter eggs hidden throughout the event and it’s up to you to find them.
Look out for this symbol: <o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
style='font-size:12.0pt;line-height:106%;mso-ansi-language:EN-US;mso-no-proof:
yes'><img width=47 height=65
src="../assets/egg symbol.png" v:shapes="Picture_x0020_1"></span><span
lang=EN-US style='font-size:12.0pt;line-height:106%;mso-ansi-language:EN-US'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
style='font-size:12.0pt;line-height:106%;mso-ansi-language:EN-US'>As this will hint
you to keep a sharp eye on what’s happening. Once you find the clue, input your
username and answer in the input box to validate your answer.<o:p></o:p></span></p>

</div>
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
.WordSection1{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>