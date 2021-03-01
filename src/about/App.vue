<template>
    <div>
        <Header v-bind:text="'About'" />
        <div class="w-2/3 h-auto p-8 bg-indigo-900 m-auto rounded-2xl shadow-xl">
            <div v-for="t in text" :key="t.id">
                <h2 class="text-xl font-bold">{{t.head}}: </h2>
                <p v-for="b in t.body" :key="b.id"
                    class="p-1 px-2 italic">
                    {{b}}
                </p>
            </div>
        </div>
        <Button v-bind:link="'../../'" v-bind:text="'Return'" v-bind:settings="{big:false}" class="my-6" />
    </div>
</template>

<script>
import Header from "../_common/Header.vue"
import Button from "../_common/Button.vue"

export default {
    name: "AboutApp",
    components: {Header, Button},
    data() {
        return {
            text: [
                {
                    head: "About Cartomancer",
                    body: [
                        "Cartomancer (meaning one who can read the future using cards such as tarot) is an interactive tarot experience that seeks to bring the magic of tarot to those who are curious about theology but don't know where to start.",
                        "Simply put, it automates a simple tarot reading, then gives you the results of that reading, telling your fortune in a simple, easy-to-understand way."
                    ]
                },
                {
                    head: "How to use Cartomancer",
                    body: [
                        "Cartomancer is both simple and effective. By starting the reading, three cards are prepared for you. Just tap the cards, and your fortune will be revealed.",
                        "After all three cards are revealed, Cartomancer will give you a brief description of what they mean, giving you insight into your past present and future."
                    ]
                },
                {
                    head: "About reversed cards",
                    body: [
                        "When using a real deck, it is common to reveal cards that are upside-down. Because of this, reversed cards have a different, unique meaning than if they were to be revealed right-side-up.",
                        "Cartomancer recreates this effect by giving each card a 50% chance to be revealed upside down."
                    ]
                },
                {
                    head: "How Cartomancer is made",
                    body: [
                        "Cartomancer's front end was built with Vue.js and TailwindCSS. A simple AWS Lambda backend was implemented to send card data to the client."
                    ]
                }
            ]
        }
    }
}
/*
{
    head: String
    body: String[]
}
*/
</script>