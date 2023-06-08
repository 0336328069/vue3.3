<template>
    <div class="cart">
        <div>
            <span>Getter: {{ getterName }}</span>
            <br>
            <span>{{ name }}</span>
            <span>{{ singer }}</span>
        </div>
        <button @click="$emit('test')">Test Change Prop 2 Way</button>
        <button @click="testArray">Test 2 way array</button>
    </div>
</template>
<script setup lang="ts" generic="T">
import { computed, toRef } from 'vue';
import type { Cart, Generic, Todo } from '../../types/typeProps';
const props = defineProps<Cart & Generic<T> & {list : Todo[]}>();
defineEmits<{
    (e: 'test'): void
}>()
const testArray = () => {
    props.list.forEach((c: Todo) => {
        c.name = "Hung Test Array",
        c.singer = "Tuan Hung"
    })
}
const getterName = toRef(() => props.name);
</script>
<style lang="">
    
</style>