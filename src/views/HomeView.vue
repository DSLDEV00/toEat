<script setup lang="ts">
import { ref } from 'vue'
import type {Dish, RecommendStatus } from '../types'
import { restaurantStatusList } from '../constants'
/**
 * Restaurant
 * 
 * Name:string
 * Address:string
 * State:string(e.g, "Want to Try" | "Must Try")
 * Dishes:array of dishe objects
 */


interface Restaurant {
  name?: string
  address?: string
  state?: RecommendStatus
  dishes?: Dish[]
}

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  state: 'Want to Try'
})

function addRestaurant() {
  restaurantList.value.push({
    name:newRestaurant.value.name,
    address: newRestaurant.value.address,
    state: newRestaurant.value.state,
    dishes:[]
  }) //
}
</script>

<template>
  <main>
    <!-- create a form that allows users to add a restaurant to list -->
    <pre>
      {{ newRestaurant }}
    </pre>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Restaurant Name</label>
        <input type="text" id="restaurant-name" v-model="newRestaurant.name">
      </div>
      <div>
        <label for="restaurant-address">Restaurant Address</label>
        <input type="text" id="restaurant-address" v-model="newRestaurant.address">
      </div>
      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select name="restaurant-status" id="restaurant-status" v-model="newRestaurant.state"> 
          <option v-for="status in restaurantStatusList" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">{{ restaurant.name }}</li>
    </ul>
  </main>
</template>
