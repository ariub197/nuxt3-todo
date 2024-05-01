<template>
  <div class="c-form">
    <h2 class="c-title">TODO List</h2>

    <form v-on:submit.prevent class="c-form__body">
      <input class="c-form__input" type="text" v-model="newItem">
      <button class="c-btn" @click="addItem">Add</button>
    </form>
    <ul class="c-form__list">
      <li class="c-form__list-item" v-for="(todo, index) in itemList" :key="index" :class="{ 'todoDone': todo.isDone }">
        <input type="checkbox" v-model="todo.isDone">
        <span>{{ todo.item }}</span>
        <button v-on:click="deleteItem(index)" class="c-btn__del">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const itemList = ref<{ item: string, isDone: boolean }[]>([]);
  const newItem = ref<string>('');
  const addItem = () => {
    if(newItem.value === '') return;
    // itemList.value.push(newItem.value);
    itemList.value.push({ item: newItem.value, isDone: false });
    newItem.value = '';
    // let todo = {
    //   item: newItem,
    //   isDone: false,
    // }
  };
  const deleteItem = (index: number) => {
    // console.log(index);
    itemList.value.splice(index, 1);
  }
</script>