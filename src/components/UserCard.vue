<script setup lang="ts">
defineProps<{
  task: string
}>()

const emit = defineEmits<{
  remove: []
}>()
</script>

<template>
  <div>
    <span>{{ task }}</span>

    <button @click="emit('remove')">
      Remove
    </button>
  </div>
</template>