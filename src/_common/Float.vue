<template>
    <div class="cc_float">
    </div>
</template>

<script>
export default {
    name: "Float"
}
</script>

<style scoped>
.cc_float {
    height: 1000px;
    width: 1000px;
    top: -100px;
    margin: 0 auto;
    @apply bg-yellow-50 absolute rounded-full z-0 opacity-20 overflow-hidden p-0;
}
</style>