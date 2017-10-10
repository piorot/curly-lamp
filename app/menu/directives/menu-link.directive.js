(function () {
    "use strict";
    angular.module('BlankApp')
        .directive('menuLink', function () {
            return {
                scope: {
                    section: '='
                },
                templateUrl: 'menu\\directives\\menu-link.template.html',
                link: function ($scope, $element) {
                    var controller = $element.parent().controller();

                    $scope.focusSection = function () {
                        // set flag to be used later when
                        // $locationChangeSuccess calls openPage()
                        controller.autoFocusContent = true;
                    };
                }
            };
        })

})();