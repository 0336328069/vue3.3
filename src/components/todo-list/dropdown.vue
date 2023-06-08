<template>
  <div id="dropdown">
      <slot name="testSlot" :msg="msg">
        {{ msg }}
      </slot>
        <div class="my-dropdown">
            <!-- On click we call the toggle method -->
        <span style="color: #000000;">{{ testRef }}</span>
        <div class="selected" @click="toggle">{{ dataDrop?.selected || 'select' }}</div>
            <div class="options" v-show="dataDrop?.isOpen">
            <!-- v-for loops trough `options` -->
            <!-- and renders a div containing the `option`s value. -->
            <div class="option" v-for="option in dataDrop?.options" @click="set(option)">
                {{ option }}
            </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { toRef, toRefs } from 'vue';

interface Props{
    dataDrop: { // 2 way binding 
        isOpen: boolean,
        selected: boolean,
        options: Array<any>
    },
    dataTest: string, // not 2 way binding
    msg: string
}
defineSlots<{
  testSlot: (props: {msg: string}) => any
}>()
const props = defineProps<Props>();
const testRef = toRef(props, 'dataTest');
const toggle = () => {
    props.dataDrop.isOpen = true;
}
const set = (data: any) => {
    props.dataDrop.selected = data;
    props.dataDrop.isOpen = false;
    testRef.value = 'Phanh';  
}
</script>
<style lang="scss" scoped>
/* My dropdown */
.my-dropdown {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70px);
  min-width: 350px;
  height: 40px;
}

/* Selected */
.selected {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background: #054641;
  border-radius: 10px;
  font: 1.25rem/40px 'Ubuntu', Helvetica, Arial, sans-serif;
  text-shadow: 2px 2px 0px #000;
  color: #fff;  
}

/* Arrow */
.selected:after {
  opacity: 0.5;
  display: inline-block;
  margin-left: 10px;
  content: '▼';
}

/* Hover state */
.selected:hover:after {
  opacity: 1;
}

/* Options wrapper (toggled by isOpen) */
.options {
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 1;
  width: 100%;
  margin-top: 3px;
  background: #fff;
  border-radius: 10px;
}

/* Option */
.option {
  padding: 5px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  font: 1.2rem 'Vollkorn', Georgia, Times, serif;
}

/* Hover state */
.option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Reset last child for a nice layout */
.option:last-child {
  border-bottom: none;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: all .25s ease-out;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
	transform: translateY(-30px);
}
</style>