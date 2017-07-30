import ActionTypes from '../constants/ActionTypes'

export function addFood(food) {
    return { type: ActionTypes.ADD_FOOD, food }
}