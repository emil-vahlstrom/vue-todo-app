import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Todo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export const useTodoStore = defineStore('todos', () => {
    const todos = ref<Todo[]>([])
    const loading = ref(false)

    async function fetchTodos() {
        loading.value = true

        const response = await fetch('https://dummyjson.com/todos?limit=5')
        const data = await response.json()

        todos.value = data.todos
        loading.value = false
    }

    async function addTodo(text: string) {
        const response = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: text,
                completed: false,
                userId: 1
            }),
        })

        const newTodo: Todo = await response.json()
        
        todos.value.unshift(newTodo)
    }

    return { todos, loading, fetchTodos, addTodo }
})

