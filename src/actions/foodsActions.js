import * as ActionTypes from '../constants/ActionTypes';
import foodApi from '../api/foodApi';

export function getAllSuccess(foods) {
    return { type: ActionTypes.GET_ALL_FOODS, foods };
}

export function addFoodSuccess(food) {
    return { type: ActionTypes.ADD_FOOD, food };
}

export default {
    addFood: function (food) {
        return function (dispatch) {
            foodApi
                .add(food.name, food.type, food.calories, food.protein, food.carbs, food.fats)
                .then(food => dispatch(addFoodSuccess(food)));
        }
    },
    getAll: function () {
        return function (dispatch) {
            return foodApi.getAll().then(foods => { dispatch(getAllSuccess(foods)) })
        }
    }
}