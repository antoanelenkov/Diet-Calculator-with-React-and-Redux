import dateFormatter from '../utils/dateFormatter';
import * as CaloriesCountType from '../constants/CaloriesCountType';

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
            _calculateMacronutrients(consumToUpdate);
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

            _calculateMacronutrients(itemToSave);

            id ? (consumation[id-1]=itemToSave) : consumation.push(itemToSave);
            
            return itemToSave;
        }

        function _calculateMacronutrients(consumation){
            if(consumation.food.type === CaloriesCountType.PER_HUNDRED_GRAMS){
                Object.assign(consumation, {
                    proteins:consumation.food.proteins*consumation.quantity/100,
                    carbs:consumation.food.carbs*consumation.quantity/100,
                    fats:consumation.food.fats*consumation.quantity/100,
                    calories:consumation.food.calories*consumation.quantity/100
                })
            }
            else if(consumation.food.type === CaloriesCountType.PER_ITEM){
                Object.assign(consumation,{
                    proteins:consumation.food.proteins*consumation.quantity,
                    carbs:consumation.food.carbs*consumation.quantity,
                    fats:consumation.food.fats*consumation.quantity,
                    calories: consumation.food.calories*consumation.quantity
                })                  
            }
            else{
                throw 'unsupported type';
            }
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