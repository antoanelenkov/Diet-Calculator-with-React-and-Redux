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

    api.add = function (name, type, calories, protein, carbs, fats) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                foods[++idGenerator] = {
                    name,
                    type,
                    calories,
                    protein,
                    carbs,
                    fats
                };

                resolve(foods[idGenerator]);
            }, remoteCallDelay)
        });
    };

    api.update = function (id, name, type, calories, protein, carbs, fats) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                foods[id] = {
                    name,
                    type,
                    calories,
                    protein,
                    carbs,
                    fats
                };

                resolve(foods[id]);
            }, remoteCallDelay)
        });
    };

    api.delete = function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                delete foods[id];
                resolve();
            }, remoteCallDelay)
        });
    }

    return api;
}());

export default foodApi;