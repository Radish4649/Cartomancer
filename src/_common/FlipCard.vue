<template>
    <div class="w-max relative my-12"
        v-bind:class="{'cursor-pointer': !flip && !flipRev}"
        v-on:click="click">
        <div id="front" class="front"
            v-bind:class="{frontflip: flip && !card.orientation, reversefrontflip: flip && card.orientation}"
            :style="{content: `url(/cards/${card.id}.jpg)`}">
        </div>
        <div class="back absolute top-0"
            v-bind:class="{backflip: flip||isReverse}">
        </div>
    </div> 
</template>

<script>
export default {
    name: "FlipCard",
    props: ["card", "reverse"],
    data() {
        return {
            flip: false,
        }
    },
    methods: {
        click() {
            if (!this.flip) {
                this.flip = true
                this.emit()
            }
        },
        emit() {
            this.$emit("flipped")
        }
    }
}
</script>

<style scoped>
/* -- default styling -- */
.front {
    height: 60vh;
    content: url(/cards/ar01.jpg);
    height: 70vh;
    @apply rounded-xl;
}
.back {
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
    @apply bg-gradient-to-b;
    @apply from-indigo-900;
    @apply to-gray-800;
    @apply rounded-xl;
    @apply shadow-2xl;
    @apply hover:from-indigo-600;
}

/* -- animation classes -- */
.backflip {
    animation-name: backflip;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
.frontflip {
    animation-name: frontflip;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

.reversefrontflip {
    animation-name: reversefrontflip;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

/* -- animation keyframes -- */
@keyframes backflip {
    from {transform: rotateY(0deg);}
    to {transform: rotateY(180deg);}
}
@keyframes frontflip {
    from {transform: rotateY(180deg);}
    to {transform: rotateY(0deg);}
}
@keyframes reversefrontflip {
    from {transform: rotateY(180deg) rotate(180deg);}
    to {transform: rotateY(0deg) rotate(180deg);}
}
</style>