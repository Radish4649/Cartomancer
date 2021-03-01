<template>
    <h2 class="text-blue-900 p-10 text-center font-bold text-4xl md:text-7xl select-none">
        {{text}} ✨
    </h2>
</template>

<script>
export default {
    name: "Header",
    props: ["text"]
}
</script>