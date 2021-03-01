<template>
    <div>
        <h1 class="text-center text-4xl py-4 font-bold text-blue-900">{{card.time}}</h1>
        <div class="card-container font-serif italic"
            v-bind:class="{'reverse-container': card.orientation, 'upright-container': !card.orientation}">
            <h2 class="text-center p-4 text-3xl font-bold opacity-80">{{card.name}}</h2>
            <div class="card-image"
            v-bind:class="{'reverse-image': card.orientation}"
            :style="{content: `url(/cards/${card.id}.jpg)`}"></div>
            <p class="px-6 py-6 text-center">{{desc}}</p>
        </div>
    </div>
</template>

<script>
import Button from "./Button.vue"

export default {
    name: "InfoCard",
    components: {Button},
    props: ["card"],
    data() {
        return {
            desc: this.card.orientation ? this.card.upright : this.card.reverse
        }
    }
}
</script>

<style scoped>
/* -- container --*/
.card-container {
    @apply rounded-2xl;
    @apply shadow-2xl; 
    height: 500px;
    width: 350px;
}
.upright-container {
    @apply bg-gradient-to-b;
    @apply from-indigo-900;
    @apply to-gray-800;
}
.reverse-container {
    @apply bg-gradient-to-b;
    @apply to-indigo-900;
    @apply from-gray-800;
}

/* -- image -- */
.card-image {
    @apply rounded-2xl;
    @apply bg-indigo-200;
    @apply shadow-2xl;
    /* content: url(/ar00.jpg); */
    height: 300px;
    margin: 0 auto;
}
.reverse-image {
    transform: rotate(180deg)
}
</style>