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
                let cosumationToSave = _isAddCommand(id) && _getFoodConsumation(food.id);
                let isEditCommand = id || !!cosumationToSave;

                cosumationToSave 
                    ? (cosumationToSave = _increaseQuantity(cosumationToSave)) 
                    : (cosumationToSave = _addOrUpdate(id, date, food, quantity));

                _updateConsumationStorage();
                resolve({consumation: cosumationToSave, isEditCommand});
            }, remoteCallDelay)
        });

        function _isAddCommand(id){
            return !id;
        }

        function _increaseQuantity(consum){
            const consumToUpdate = Object.assign({},consum);
            consumToUpdate.quantity += quantity*1;
            consumation[consumToUpdate.id-1] = consumToUpdate;

            return consumToUpdate;
        }

        function _addOrUpdate(id, date, food, quantity){
            const itemToSave = {
                id: id || ++idGenerator,
                date: dateFormatter.formatDate(date),
                food,
                quantity: quantity*1
            };

            id ? (consumation[id-1]=itemToSave) : consumation.push(itemToSave);
            
            return itemToSave;
        }
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

    function _getFoodConsumation(id){
        return consumation.find( consum => consum.food.id === id);
    }

    return api;
}());