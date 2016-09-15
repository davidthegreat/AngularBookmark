var app = angular.module('App', []);

app.controller('Mainctrl', function($scope){
	$scope.categories = [
		{"id": 0, "name": "Development"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Exercise"},
		{"id": 3, "name": "Humor"},
	];

	$scope.bookmarks = [
		{"id":0, "title": "AngularJS", "url": "http://angular.org", "category": "Development"},
		{"id":1, "title": "ReactJS", "url": "http://angular.org", "category": "Development"},
		{"id":2, "title": "AngularJS", "url": "http://angular.org", "category": "Development"},
		{"id":3, "title": "AngularJS", "url": "http://angular.org", "category": "Design"},
		{"id":4, "title": "AngularJS", "url": "http://angular.org", "category": "Design"},
		{"id":5, "title": "AngularJS", "url": "http://angular.org", "category": "Design"},
		{"id":6, "title": "AngularJS", "url": "http://angular.org", "category": "Exercise"},
		{"id":7, "title": "AngularJS", "url": "http://angular.org", "category": "Exercise"},
		{"id":8, "title": "AngularJS", "url": "http://angular.org", "category": "Exercise"},
		{"id":9, "title": "AngularJS", "url": "http://angular.org", "category": "Humor"},
		{"id":10, "title": "AngularJS", "url": "http://angular.org", "category": "Humor"},
		{"id":11, "title": "AngularJS", "url": "http://angular.org", "category": "Humor"},
	];


});