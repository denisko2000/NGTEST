angular.module('main_app', []).controller('main_func', function ($scope, $http) {
    $scope.inputData = '';
    $scope.answer = [];
    $scope.changeWacher = function () {
        $http({ method: 'GET', url: '/find/'+$scope.inputData }).
            then(function success(response) {
                $scope.answer = response.data;
            });
    }
});