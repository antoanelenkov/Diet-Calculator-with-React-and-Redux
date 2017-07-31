export default (function () {
    const api = {};

    const remoteCallDelay = 500;

    let foods = _getFoodsFromStorage();
    let idGenerator = foods.length;

    api.getAll = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => { resolve([...foods]) }, remoteCallDelay)
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
                };

                id ? (foods[id-1]=itemToSave) : foods.push(itemToSave);
                _updateFoodsStorage();
            
            resolve(itemToSave);
            }, remoteCallDelay)
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