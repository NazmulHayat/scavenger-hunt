<template>
    <div>
        <div v-if="isMobile">
        <NavbarPhone/>
    </div>
        <div v-else>
            <NavbarPC/>
        </div>
    </div>
</template>

<script>
import NavbarPC from "./Navbar-pc.vue"
import NavbarPhone from "./Navbar-phone.vue"
const BreakOff=1080;

export default {
    components: {
        NavbarPC,
        NavbarPhone
    },
    data() {
        return {
            isMobile:false
        }
    },
    methods:{
        CheckMobile()
        {
            window.addEventListener("resize",()=>{
                this.isMobile = document.body.clientWidth <= BreakOff;
            });
            this.isMobile = document.body.clientWidth <= BreakOff;
        }
    },
    created()
    {
        this.CheckMobile();
    }
}

</script>


<style>
</style>
