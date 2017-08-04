import serverApi from './serverRequestApi';
import * as CaloriesCountType from '../constants/CaloriesCountType';

export default (function () {
    const api = {};

    const remoteCallDelay = 500;

    let foods = _getFoodsFromStorage();
    let idGenerator = foods.length;

    api.getAll = function () {
        return new Promise(function (resolve, reject) {
            serverApi
                .get('/foods/getall')
                .then(foods => resolve(foods));
        });
    };

    api.save = function (id, name, type, calories, proteins, carbs, fats) {
        return new Promise(function (resolve, reject) {
            const itemToSave = {
                name,
                type: CaloriesCountType.PER_HUNDRED_GRAMS ? 0 : 1,
                calories: calories*1,
                proteins: proteins*1, 
                carbs: carbs*1,
                fats: fats*1
            };

            serverApi
                .post('/foods/save', itemToSave)
                .then(food =>{ console.log(food); resolve(food)});
        });
    };

    api.delete = function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                foods = foods.filter(food => food.id !== id)
                _updateFoodsStorage();
                    
                resolve();
            }, remoteCallDelay)
        });
    };

    function _updateFoodsStorage() {
        localStorage["foods"] = JSON.stringify(foods);
    };

    function _getFoodsFromStorage() {
        return (localStorage["foods"] && JSON.parse(localStorage["foods"])) || [];
    };

    return api;
}());