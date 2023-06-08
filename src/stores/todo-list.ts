import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo-list', () => {
  const todos = ref([
    {
        id: 1,
        name: "Dangerously",
        singer: "Charlie Puth"
    },
    {
        id: 2,
        name: "Lạc Trôi",
        singer: "Sơn Tùng MTP"
    },
    {
        id: 3,
        name: "Đôi Mươi",
        singer: "Hoàng Dũng"
    }
  ])

  return { todos }
})
