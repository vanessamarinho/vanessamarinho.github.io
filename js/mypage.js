angular.module('myPageApp', [])
  .controller('languageController',['$scope', function($scope) {
  $scope.menu = {};
  
  $scope.menu.research = ['Pesquisa','Research'];
  $scope.menu.people = ['Pessoas','People'];
  $scope.menu.people.vanessa = ['Estudante de mestrado na Universidade de São Paulo (USP). Vanessa é formada em Ciências da Computação pela USP e foi aluna visitante na Universidade de Toronto pelo programa Ciência sem Fronteiras.',
  "Graduate student at University of São Paulo (USP). Vanessa did her undergraduate course in Computer Science at USP. She was an exchange student at University of Toronto through the Science without Borders' program"];
  $scope.menu.people.diego = ['Professor da Universidade de São Paulo (USP). Diego é formado em Engenharia da Computação pela USP e Doutor também pela USP. Sua tese de doutorado recebeu o Prêmio Tese Destaque USP.',''];
  
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