var app = angular.module('HomeworkApp', ['ui.router']);

app.controller('homeworkController', function($scope, hwkFactory) {
    $scope.homeworks = hwkFactory;
    $scope.disp = function (homework){
        homework.display = !homework.display;
    }
});

app.factory('hwkFactory', function () {
    return [
        {
            assignment: 'Test First Javascript',
            url: 'http://github.com/adolfoartaza/FullstackTestFirst',
            status: 'completed',
            display: false
        },
        {
            assignment: 'Workshop 1',
            url: 'http://github.com/adolfoartaza/flashcards-day1',
            status: 'completed',
            display: false

        },
        {
            assignment: 'Workshop 2',
            url: 'http://github.com/adolfoartaza/flashcards',
            status: 'completed',
            display: false
        },
        {
            assignment: 'Workshop 3',
            url: 'Not Available',
            status: 'incomplete',
            display: false
        },
        {
            assignment: 'Workshop 4',
            url: 'Not Available',
            status: 'incomplete',
            display: false
        },
        {
            assignment: 'Final Assignment',
            url: 'https://github.com/adolfoartaza/AngularJSFinal',
            status: 'completed',
            display: false
        }
    ]
});

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'homeworkController'
    })

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'homeworkController'
    })
})