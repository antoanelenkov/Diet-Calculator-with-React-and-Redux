import $ from 'jquery';

export default (function () {
    const api = {};

    api.get = function (relativeUrl) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type:'GET',
                url: window.location.origin+relativeUrl,
                success: function(data, textStatus){
                    resolve(JSON.parse(data));
                },
                error: function(xhr, textStatus, errorThrown){
                    throw errorThrown;
                }
            });
        });
    };

    api.post = function (relativeUrl,data) {
        return new Promise(function (resolve, reject) {

            $.ajax({
                type:'POST',
                data : data,
                url: window.location.origin+relativeUrl,
                success: function(data, textStatus){
                    resolve(JSON.parse(data));
                },
                error: function(xhr, textStatus, errorThrown){
                    throw errorThrown;
                }
            });
        });
    };

    return api;
}());