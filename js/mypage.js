angular.module('myPageApp', ['FBAngular'])
  .controller('languageController',['$scope', function($scope) {
  //Content from each section
  $scope.menu = {};
  $scope.project = {};
  $scope.people = {};
  $scope.production = {};
  
  //Words
  $scope.words = {};
  $scope.words.here = ['aqui', 'here'];
  $scope.words.thanks = ['Agradecimentos:', 'Special Thanks:'];
  $scope.words.firstResults = ['Resultados Preliminares', 'First Results'];
  $scope.words.production = ["Produção Bibliográfica", "Bibliographical Production"];
  $scope.words.relatedPublication = ["Publicações Relacionadas","Related Publications"];
  $scope.words.student= ["Aluna de Mestrado","Master's candidate"];
  $scope.words.supervisor= ["Orientador","Supervisor"];

  $scope.clickedValue = 0;
  
  $scope.menu.research = ['Pesquisa','Research'];
  $scope.menu.people = ['Pessoas','People'];
  $scope.menu.interesting = ['Links','Links'];
  $scope.menu.results = ["Resultados","Results"];
  $scope.menu.publications = ["Publicações","Publications"];


  $scope.people.vanessa = ['Estudante de mestrado na Universidade de São Paulo (USP). Vanessa é formada em Ciências da Computação pela USP e foi aluna visitante na Universidade de Toronto pelo programa Ciência sem Fronteiras por um ano.',
  "Master's candidate at University of São Paulo (USP). Vanessa did her undergraduate course in Computer Science at USP. She was an exchange student at University of Toronto through the Science without Borders' program"];
  $scope.people.diego = ['Professor Doutor da Universidade de São Paulo (USP). Diego é formado em Engenharia de Computação pela USP e Doutor também pela USP. Sua tese de doutorado recebeu o Prêmio Tese Destaque USP.',
  "Professor at University of São Paulo (USP). Diego did his undergraduate course in Computer Engineering at USP and he received his PhD at USP. His PhD thesis was selected as the best one at USP between 2012 and 2013."];
  
  
  $scope.page = {}
  $scope.page.title=['Reconhecimento de Autoria com Redes Complexas','Authorship Recognition with Complex Networks'];

  $scope.project.summary = {};
  $scope.project.summary.title=['Resumo', 'Summary'];
  $scope.project.summary.content=['O resumo é', 'The summary is...'];
  $scope.project.summary.moreInfo = ["Obs.: Mais informações sobre o projeto estão disponíveis na opção 'Pesquisa' do menu acima ou clicando ", "PS.: More information about the project is available at the option 'Research' in the above menu or clicking "];

  $scope.project.information = ['Projeto de Pesquisa','Research Project'];

  $scope.project.footnote = [['Nas redes de adjacência convencionais, apenas palavras vizinhas são conectadas.','Tais palavras são úteis em estratégias tradicionais de reconhecimento de autoria não baseadas em grafos.'],["In standard adjacency networks, only neighboring words are connected.","These words are useful in traditional strategies of authorship recognition not based on graphs."]];

  $scope.project.title = {};
  $scope.project.title.title = ['Título', 'Title'];
  $scope.project.title.content = [];

  $scope.project.theme = {};
  $scope.project.theme.title = ['Tema', 'Theme'];
  $scope.project.theme.content = [['Ciência da Computação','Inteligência Artificial','Processamento de Linguagens Naturais','Reconhecimento de Autoria'],
  ['Computer Science','Artificial Inteligence','Natural Language Processing','Authorship Recognition']];

  $scope.project.problem = {};
  $scope.project.problem.title = ['Problema (Lacuna)', 'Problem (Gap)'];
  $scope.project.problem.content = ['Embora redes complexas já tenham sido utilizadas para reconhecer autoria, o estado da arte ainda não foi atingido. Além disso, os classificadores de autoria atuais são vulneráveis à ataques (autores disfarçando o estilo). Por fim, os modelos de redes ainda não foram combinados com técnicas tradicionais de reconhecimento de autoria.',
"Although complex networks have been used to recognize authorship, the state of art hasn't been reached yet. In addition, the current authorship classifiers are vulnerable to attacks (authors modifying the style).Finally, the network models haven't been combined with traditional techniques yet."];

  $scope.project.hypotheses = {};
  $scope.project.hypotheses.title = ['Hipóteses', 'Hypotheses'];
  $scope.project.hypotheses.content = [['Aumento da janela de conexão de palavras* é capaz de melhorar a tarefa de reconhecimento de autoria. ','Uso das function words** para montagem da rede de palavras melhora a tarefa de reconhecimento de autoria.','Combinar fatores tradicionais com as medidas de redes melhora a tarefa de reconhecimento de autoria.'],
  ['Increasing the connection window* between words can improve the authorship recognition task.','Using function words** while creating the network improves the authorship recognition task.','Combining traditional factors with measurements of networks improves the authorshiop recognition task.']];

  
  $scope.project.goal = {};
  $scope.project.goal.title = ['Propósitos','Purposes'];
  $scope.project.goal.content = ['O objetivo deste trabalho é estender a modelagem tradicional, escolhendo-se a janela de conexão  ótima para o problema. Além disso, pretende-se utilizar informação de conectividade de palavras funcionais para complementar a caracterização de estilo de autores. Por fim, pretende-se criar classificadores híbridos que sejam capazes de combinar fatores tradicionais com as propriedades fornecidas pela análise topológica de redes complexas.',
  "The goal of this work is to extend the traditional modeling, choosing the best connection window to the problem. Additionally, we intend to use the connectivity information of functional words to complement the characterization of an author's style. Finally, we intend to create hybrid classifiers that are able to combine traditional factors with the properties provided by the topological analysis of complex networks."];

  $scope.project.motivation = {};
  $scope.project.motivation.title = ['Motivação','Motivation'];
  $scope.project.motivation.content = ['A tarefa de reconhecimento de autoria tem sido estudada com sucesso através da representação de redes de adjacência de palavras. Nos últimos anos, a quantidade de textos disponíveis e de fácil acesso na Web revelou o potencial da análise de autoria em diferentes aplicações. Esta tarefa é bastante relevante dentro da área de processamento de línguas naturais contribuindo para diversos avanços na literatura [18], história [19], serviços de inteligência [14], computação forense [16, 20] e também em investigações criminais [21] ou até mesmo para interceptar mensagens terroristas [14]. Outra aplicação se dá no contexto do plagiarismo, pois é possível identificar trechos de plágios e inconsistências estilísticas a partir da tarefa de verificação de autoria. A importância desta tarefa se torna ainda mais evidente também quando se deseja estimar a similaridade de textos.',
  "The authorship recognition task has been successfully studied through the representation of words in adjacent networks. In the last few years, the amount of available and accessible text on the Web revealed the potential of authorship analysis in different applications. This task is very important in the natural language processing area, contributing to many advances in the literature [18], [19] history, intelligence services [14], computer forensics [16, 20] as well as in criminal investigations [21] or even intercepting terrorist messages [14]. Another application is in the context of plagiarism, it is possible to identify plagiarism and stylistic inconsistencies with the usage of an authorship verification task. The importance of this task becomes even more evident when one desires to estimate the similarity of texts."];

$scope.production.firstContent = ["Por estar em um estágio inicial da pesquisa, esse projeto ainda não resultou em nenhuma publicação.  No próximo tópico, são apresentas algumas publicações relacionadas.","As we are at an early research stage, this project hasn't produced any publication yet. Take a look at the following topic to find some related publications."]
$scope.production.secondContent = ["A seguir, alguns artigos, teses e dissertações relacionados ao projeto são apresentados.  Vale a pena destacar que muitos desses trabalhos são do professor Dr. Diego Amancio.", "In this topic, some publications, theses and dissertations related to this project are presented. It is worth noting that many of these works are results of Professor Diego Amancio’s research work."];

  var scroll = function(){

   $('html, body').animate({
          scrollTop: $("#pageContent").offset().top
    }, 500);
  }
  
  /*0 stands for portuguese*/
  $scope.language = 0;

  $scope.research = function(){
    $scope.clickedValue = 1;
    scroll();
  }
  
  $("#portuguese").click(function(e){
  	$scope.language = 0;
	$scope.$apply();
  });
  
  $("#english").click(function(e){
  	$scope.language = 1;
	$scope.$apply();
  });



  
$("#home").click(function(e){
    $scope.clickedValue = 0;
    $scope.$apply();
    scroll();
  });

   $("#research").click(function(e){
  	 $scope.clickedValue = 1;
	   $scope.$apply();
     scroll();
  });
  
   $("#people").click(function(e){
    	$scope.clickedValue = 2;
    	$scope.$apply();
    	scroll();

  });

   $("#results").click(function(e){
      $scope.clickedValue = 3;
      $scope.$apply();
      scroll();
  });
  
    $("#interesting").click(function(e){
      $scope.clickedValue = 4;
      $scope.$apply();
      scroll();
  });

    $("#publications").click(function(e){
      $scope.clickedValue = 5;
      $scope.$apply();
      scroll();
  });
}]);