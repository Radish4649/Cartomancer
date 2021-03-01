<template>
    <div @mousemove="mouseMove" class="w-full h-screen m-0 p-0">
        <div class="m-auto w-max py-36 z-10 h-max relative">
            <div class="relative z-10">
                <div>
                <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold text-blue-900 select-none">
                    Cartomancer 💫
                </h1>
                </div>
                <Button class="m-4"
                    v-bind:link="'./w/redirect/index.html'" 
                    :text="'Start a Reading'" 
                    :settings="{big: true}" />
                <Button class="m-4 hidden" 
                    v-bind:link="''"
                    :text="'Browse Cards'" 
                    :settings="{big: true}" />
                <Button 
                    v-bind:link="'./w/about/index.html'"
                    :text="'About'"
                    :settings="{big: false}" />
            </div>
        </div>
        <Float class="right-1/4 hidden lg:block" />
        <Float class="left-1/4 hidden lg:block" />
        <Float class="right-1/3 hidden lg:block" />
        <Float class="left-1/3 hidden lg:block" />
        <Float class="right-1/2 hidden lg:block" />
        <Float class="left-1/2 hidden lg:block" />
    </div>
</template>

<script>
import Button from "../_common/Button.vue"
import Float from "../_common/Float.vue"

export default {
    name: "IndexApp",
    components: {Float, Button},
    data() {
        return {
            coordinates: [],
        }
    },
    methods: {
        move(p,i,a) { // -- position on screen, index, axis (vertical or horizontal)
            i = Math.ceil((i+1)/2)
            var l = a === "w" ? window.innerWidth : window.innerHeight // -- length
            return (p - (l/2))/(100/(i+1)) 
        }, 
        mouseMove(e) {
            var el_array = document.getElementsByClassName("cc_float")
            for (let i = 0; i < el_array.length; i++) {
                el_array[i].style.transform = `translate3d(${this.move(e.screenX, i, "w")}%, ${this.move(e.screenY,i, "h")}%, 0)`
            }
            console.log(e.screenX, e.screenY)
        }
    }
}
</script>

<style>
body {
    overflow: hidden;
}
</style>