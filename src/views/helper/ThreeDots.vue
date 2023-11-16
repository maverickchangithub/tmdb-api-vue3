<template>
    <div class="loader flex items-center justify-center space-x-1 px-3 pt-2">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script setup>

</script>
<style scoped>    
    .loader div {
        @apply w-1.5 h-1.5 rounded-full bg-neutral-200 animate-pulse;
    }
    .loader div:nth-child(1) {
        animation-delay: 0.4s;
    }
    .loader div:nth-child(2) {
        animation-delay: 0.7s;
    }    
</style>