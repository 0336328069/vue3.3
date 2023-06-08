<template lang="">
    <div>
        <h2>{{ todoList.data }}</h2>
        {{ todoList.data[0] }}
        <Cart :initData="todoList.data[0]" :name="todoList.data[0].name" :list="todoList.data" @test="test" />
        <Dropdown :dataDrop="dropdownData" :dataTest="dropdownData.test" :msg="'Hung Test Slot'" />
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import Cart from '../todo-list/cart.vue';
import Dropdown from './dropdown.vue';
import { useTodoStore } from '../../stores/todo-list';
import type { Todo } from '../../types/typeProps';
const todoList = reactive<{data: Todo[]}>({
    data: []
});
const dropdownData = ref({
    options: [
      'Heineken',
      'Amstel',
      'Dommelsch'
    ],
    selected: 'Heineken',
    isOpen: false,
    test: 'Hung'
})
const todoStore = useTodoStore();
const test = () => {
    todoList.data[0].name = "Hung";
    todoList.data[0].singer = "Hung";
}
watch(() => todoStore.todos, (val: Todo[]) => {
    todoList.data = JSON.parse(JSON.stringify(val));
}, { immediate: true, deep : true })
</script>