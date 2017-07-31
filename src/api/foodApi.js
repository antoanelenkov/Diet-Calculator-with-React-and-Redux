export default (function () {
    const api = {};

    const foods = _getFoodsFromStorage();
    const remoteCallDelay = 500;

    let idGenerator = foods.length;

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
                _updateFoodsStorage();
            
            resolve(itemToSave);
            }, remoteCallDelay)
        });
    };

    api.delete = function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                delete api._find(id);
                _updateFoodsStorage();
                    
                resolve();
            }, remoteCallDelay)
        });
    };

    api._find = function(id){
            return foods.find( food => food.id === id);
    };

    function _updateFoodsStorage() {
        localStorage["foods"] = JSON.stringify(foods);
    };

    function _getFoodsFromStorage() {
        return (localStorage["foods"] && JSON.parse(localStorage["foods"])) || [];
    };

    return api;
}());