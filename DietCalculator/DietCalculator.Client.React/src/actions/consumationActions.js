import * as ActionTypes from '../constants/ActionTypes';
import consumationApi from '../api/consumationApi';

export function getAllSuccess(consumations) {
    return { type: ActionTypes.GET_ALL_CONSUMATIONS,  consumations };
}

export function addSuccess(consumation) {
    return { type: ActionTypes.ADD_CONSUMATION, consumation };
}

export function editSuccess(consumation) {
    return { type: ActionTypes.EDIT_CONSUMATION, consumation };
}

export function deleteSuccess(id) {
    return { type: ActionTypes.DELETE_CONSUMATION, id };
}

export default {
    saveConsumation: function (consumation) {
        return function (dispatch) {
            consumationApi
                .save(consumation.id, consumation.date, consumation.food, consumation.quantity)
                .then(response => {                   
                    response.isEditCommand ? dispatch(editSuccess(response.consumation)) : dispatch(addSuccess(response.consumation));
                });
        }
    },
    delete: function(id){
        return function(dispatch){
            consumationApi
                .delete(id)
                .then( () => dispatch(deleteSuccess(id)));
        }
    },
    getAll: function () {
        return function (dispatch) {
            return consumationApi.getAll().then(consumations => { dispatch(getAllSuccess(consumations)) })
        }
    }
}