import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const data = ref({
    name: 'Hung test',
    count: 10,
    list: [
      {
        id: 1,
        name: 'a'
      },
      {
        id: 2,
        name: 'b'
      }
    ]
  })

  return { data }
})
