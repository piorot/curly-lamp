(function(){
    "use strict";
    angular.module("BlankApp")
    .filter("nospace", function(){
        return function(value){
            return (!value) ? '' : value.replace(/ /g, '');
        }     
    })

})();