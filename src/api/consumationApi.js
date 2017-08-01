import dateFormatter from '../utils/dateFormatter';

export default (function () {
    const api = {};

    const remoteCallDelay = 500;

    let consumation = _getConsumationFromStorage();
    let idGenerator = consumation.length;

    api.getAll = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => { resolve([...consumation]) }, remoteCallDelay)
        });
    };

    api.save = function (id, date, food, quantity) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const itemToSave = {
                    id: id || ++idGenerator,
                    date: dateFormatter.formatDate(date),
                    food,
                    quantity
                };

                id ? (consumation[id-1]=itemToSave) : consumation.push(itemToSave);
                _updateConsumationStorage();
            
            resolve(itemToSave);
            }, remoteCallDelay)
        });
    };

    api.delete = function (id) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                consumation = consumation.filter(consumation => consumation.id !== id)
                _updateConsumationStorage();
                    
                resolve();
            }, remoteCallDelay)
        });
    };

    function _updateConsumationStorage() {
        localStorage["consumation"] = JSON.stringify(consumation);
    };

    function _getConsumationFromStorage() {
        return (localStorage["consumation"] && JSON.parse(localStorage["consumation"])) || [];
    };

    return api;
}());