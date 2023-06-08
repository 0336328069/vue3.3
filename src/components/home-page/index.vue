<template>
    <div>
        {{ product.count }}
        <button @click="product.count++">+</button>
        <Input v-model="product.name" />
        <div v-for="item in product.list" :key="`${item.id}_listCount`">
            <div>
                {{ item.name }}
                <Input v-model="item.name" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, watch } from "vue";
import Input from "../input.vue";
import { useCounterStore } from "../../stores/counter";
const counter = useCounterStore();
const { data } = storeToRefs(counter);
const product = reactive<{name : string, count: number, list: any[]}>({
    name: 'hung',
    count: 0,
    list: []
})
watch(() => data.value, (val: any) => {
   product.name = val.name;
   product.count = val.count;
   product.list = JSON.parse(JSON.stringify(val.list));
}, { immediate: true, deep: true })
</script>