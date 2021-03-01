<template>
    <div class="flex justify-around m-auto flex-wrap">
        <div v-for="c in cards" :key="c.id">
            <FlipCard v-bind:card="c" v-on:flipped="flip" />
        </div>
    </div>
</template>

<script>
import FlipCard from "../_common/FlipCard.vue"

export default {
    name: "ReadingApp",
    components: {FlipCard},
    data() {
        return {
            cards: JSON.parse(localStorage.getItem("drawn")),
            cardsRemaining: 3
        }
    },
    methods: {
        flip() {
            this.cardsRemaining--
            if (!this.cardsRemaining) {
                setTimeout(function() {
                    window.location.replace("../result/index.html")
                }, 3000)
            }
        }
    }
}
</script>
