angular.module('myPageApp', [])
  .controller('languageController',['$scope', function($scope) {
  $scope.menu = {};
  
  $scope.menu.research = ['Pesquisa','Research'];
  $scope.menu.people = ['Pessoas','People'];
  $scope.menu.interesting = ['Links Interessantes','Interesting Links'];
  
  $scope.page = {}
  $scope.page.title=['Reconhecimento de Autoria com Redes Complexas','Authorship Recognition with Complex Networks'];
  
  /*0 stands for portuguese*/
  $scope.language = 0;
  
  $("#portuguese").click(function(e){
  	$scope.language = 0;
	$scope.$apply();
  });
  
  $("#english").click(function(e){
  	$scope.language = 1;
	$scope.$apply();
  });
  
}]);