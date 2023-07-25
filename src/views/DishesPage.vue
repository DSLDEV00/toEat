<script setup lang="ts">
import { ref } from 'vue'
import type {Dish } from '../types'
import { restaurantStatusList } from '../constants'


const dishList = ref<Dish[]>([])
const newDish = ref<Dish>({
    state: 'Want to Try'
})

function addDish() {
    dishList.value.push({
    name:newDish.value.name,
    state: newDish.value.state,
  }) //
}
</script>

<template>
  <main>
    <!-- create a form that allows users to add a restaurant to list -->
    <pre>
      {{ newDish }}
    </pre>
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Dish Name</label>
        <input type="text" id="dish-name" v-model="newDish.name">
      </div>
      
      <div>
        <label for="dish-status">Dish Status</label>
        <select name="dish-status" id="dish-status" v-model="newDish.state"> 
          <option v-for="status in restaurantStatusList" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Dish</button>
    </form>
    <ul>
      <li v-for="dish in dishList" :key="dish.name">{{ dish.name }}</li>
    </ul>
  </main>
</template>
