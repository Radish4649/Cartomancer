<template>
    <div class="">
        <form v-bind:action="link"
        class="px-2 text-2xl font-bold rounded-xl w-max mx-auto text-center bg-indigo-900 cursor-pointer shadow-xl
                bg-gradient-to-tr  hover:to-red-300"
                v-bind:class="{'px-4': settings.big, 'text-4xl': settings.big, 
                'from-purple-800': settings.big, 'to-purple-600': settings.big,
                'from-purple-900': !settings.big, 'via-purple-900': !settings.big, 'to-purple-700': !settings.big}">
            <input type="submit" v-bind:value="text" 
            class="py-2 bg-transparent cursor-pointer font-sans"
            v-bind:class="{'py-4': settings.big}"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: ["text", "link", "settings"],
}
</script>

<style scoped>
button {
    text-indent: 5px;
}
</style>