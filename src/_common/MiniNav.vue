<template>
    <div class="fixed top-0 right-0 flex justify-around w-48 py-2 font-extrabold">
        <div v-for="l in links" :key="l.id">
            <a v-bind:href="l.link"
                class="hover:text-indigo-900 p-2">{{l.name}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "MiniNav",
    data() {
        return {
            links: [
                {
                    name: "Home",
                    link: "../../"
                },
                {
                    name: "About",
                    link: "../about/index.html"
                }
            ]
        }
    }
}
</script>