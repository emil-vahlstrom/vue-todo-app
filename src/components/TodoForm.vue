<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const emit = defineEmits<{
    add: [text: string]
}>()

async function submit() {
    if (!text.value.trim()) return

    emit('add', text.value)

    text.value = ''
}
</script>

<template>
    <form @submit.prevent="submit" class="d-flex gap-2">
        <input
            v-model="text"
            class="form-control"
            placeholder="New todo"
        >
        <button type="submit" class="btn btn-primary">
            Add
        </button>
    </form>
</template>