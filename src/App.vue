<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from './stores/todos'
import TodoItem from './components/TodoItem.vue'
import TodoForm from './components/TodoForm.vue'

const store = useTodoStore()

onMounted(() => {
  store.fetchTodos()
})
</script>

<template>
  <main class="container py-5">
    <div class="mx-auto" style="max-width: 700px">
    <h1 class="mb-4">Todo App</h1>
    </div>

    <TodoForm />

    <div class="mt-4">
      <p v-if="store.loading" class="text-muted">Loading...</p>

      <TodoItem
        v-for="todo in store.todos"
        :key="todo.id"
        :todo="todo"
        />
    </div>
  </main>
</template>