<script setup lang="ts">
import type { Todo } from '../stores/todos'

defineProps<{
    todo: Todo
}>()
</script>

<template>
    <div class="card mb-2">
        <div class="card-body">
            {{ todo.todo }}
        </div>
    </div>
</template>