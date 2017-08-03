import * as ActionTypes from '../constants/ActionTypes';
import foodApi from '../api/foodApi';

export function getAllSuccess(foods) {
    return { type: ActionTypes.GET_ALL_FOODS, foods };
}

export function addFoodSuccess(food) {
    return { type: ActionTypes.ADD_FOOD, food };
}

export function editFoodSuccess(food) {
    return { type: ActionTypes.EDIT_FOOD, food };
}

export function deleteFoodSuccess(id) {
    return { type: ActionTypes.DELETE_FOOD, id };
}

export default {
    addFood: function (food) {
        return function (dispatch) {
            foodApi
                .save(food.id, food.name, food.type, food.calories, food.proteins, food.carbs, food.fats)
                .then(savedFood => {
                    food.id ? dispatch(editFoodSuccess(savedFood)) : dispatch(addFoodSuccess(savedFood));
                });
        }
    },
    delete: function(id){
        return function(dispatch){
            foodApi
                .delete(id)
                .then( () => dispatch(deleteFoodSuccess(id)));
        }
    },
    getAll: function () {
        return function (dispatch) {
            return foodApi.getAll().then(foods => { dispatch(getAllSuccess(foods)) })
        }
    }
}