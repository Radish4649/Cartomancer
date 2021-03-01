<template>
    <MiniNav />
    <Header v-bind:text="'Results'" />
    <div class="
        flex justify-around flex-col lg:flex-row
        w-max lg:w-auto m-auto">
        <div v-for="c in cards" :key="c.id">
            <InfoCard v-bind:card="c" />
        </div>
    </div>
</template>

<script>
import MiniNav from "../_common/MiniNav.vue"
import Header from "../_common/Header.vue"
import InfoCard from "../_common/InfoCard.vue"

export default {
    name: "ReadingApp",
    components: {Header, InfoCard, MiniNav},
    data() {
        return {
            cards: JSON.parse(localStorage.getItem("drawn")),
        }
    }
}
</script>