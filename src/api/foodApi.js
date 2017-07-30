import _foods from './foods.json'

const foodApi = (function(){
    const api={};

    const foods = _foods;

    let idGenerator = _foods.length;

    api.getAll = function(){
        return foods;
    };

    api.add = function(name,type,calories,protein,carbs,fats){
        foods[++idGenerator]={
            name,
            type,
            calories,
            protein,
            carbs,
            fats
        };
    };

    api.update = function(id,name,type,calories,protein,carbs,fats){
        foods[id] ={
            name,
            type,
            calories,
            protein,
            carbs,
            fats
        };
    };

    api.delete = function(id){
        delete foods[id];
    }

    return api;
}());

export default foodApi;