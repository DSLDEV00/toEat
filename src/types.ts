import {restaurantStatusList} from './constants'

export type RecommendStatus = typeof restaurantStatusList[number] 

type Diet = 'vegan' | 'vegetarian' | 'gluten-free' | 'lactose-free' | 'pescastarian' | 'other' ;

export interface Dish {
    name?: string
    diet?: Diet
    state: RecommendStatus
}