import _foods from './foods.js'

const foodApi = (function () {
    const api = {};

    const foods = _foods;
    const remoteCallDelay = 500;

    let idGenerator = _foods.length;

    api.getAll = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => { resolve(foods) }, remoteCallDelay)
        });
    };

    api.save = function (id, name, type, calories, proteins, carbs, fats) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const itemToSave = {
                    id: id || ++idGenerator,
                    name,
                    type,
                    calories,
                    proteins,
                    carbs,
                    fats
                }

                foods.push(itemToSave);

                resolve(itemToSave);
            }, remoteCallDelay)
        });
    };

    api.delete = function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                delete api._find(id);
                resolve();
            }, remoteCallDelay)
        });
    }

    api._find = function(id){
        return foods.find( food => food.id === id);
    }

    return api;
}());

export default foodApi;