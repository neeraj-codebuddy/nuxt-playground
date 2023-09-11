<script lang="ts" setup>
import {storeToRefs } from 'pinia'
  const counter=useState('counter')
  const nameStore=useNameStore()
  const {name}=storeToRefs(nameStore)
</script>

<template>
  <div>
    {{ counter }}
  </div>
  <div>
    
    This is page 2    
  </div>
  <span>Name: {{ name }}</span>
</template>




<style>

</style>
