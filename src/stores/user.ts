import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Alice')
  const loggedIn = ref(true)

  function logout() {
    loggedIn.value = false
  }

  return { name, loggedIn, logout }
})