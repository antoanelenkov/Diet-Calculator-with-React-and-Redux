export default (function () {
    const api = {};

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    api.formatDate = function (date) {
        if(monthNames.find(month => date.toString().indexOf(month)>=0)){
            return date;
        }

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    return api;
}());