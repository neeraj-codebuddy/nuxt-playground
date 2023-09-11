<script setup lang="ts">
const counter=useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    {{ counter }}
    <button @click="counter++">Click me to update page 1 state</button>
</template>