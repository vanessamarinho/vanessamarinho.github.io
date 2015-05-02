angular.module('myPageApp', ['FBAngular'])
  .controller('languageController',['$scope', function($scope) {
  //Content from each section
  $scope.menu = {};
  $scope.project = {};
  $scope.people = {};
  $scope.production = {};
  $scope.links = {};
  
  //Words
  $scope.words = {};
  $scope.words.here = ['aqui', 'here'];
  $scope.words.thanks = ['Agradecimentos:', 'Special Thanks:'];
  $scope.words.firstResults = ['Resultados Preliminares', 'First Results'];
  $scope.words.production = ["Produção Bibliográfica", "Bibliographical Production"];
  $scope.words.relatedPublication = ["Publicações Relacionadas","Related Publications"];
  $scope.words.student= ["Aluna de Mestrado","Master's candidate"];
  $scope.words.studentM= ["Aluno de Mestrado","Master's candidate"];
  $scope.words.supervisor= ["Orientador","Supervisor"];
  $scope.words.interestingLinks = ["Outros Links","Other Links"];
  $scope.words.books = ["Livros","Books"];
  $scope.words.linkedIn = ["Rede do LinkedIn","LinkedIn Network"];
  $scope.words.density = ["Densidade","Density"];
  $scope.words.absolute = ["Tamanho Absoluto","Absolute Size"];
  $scope.words.effective = ["Tamanho Efetivo","Effective Size"];


  $scope.clickedValue = 0;
  
  $scope.menu.research = ['Pesquisa','Research'];
  $scope.menu.people = ['Pessoas','People'];
  $scope.menu.interesting = ['Links','Links'];
  $scope.menu.results = ["Resultados","Results"];
  $scope.menu.publications = ["Publicações","Publications"];


  $scope.people.vanessa = ['Estudante de mestrado na Universidade de São Paulo. Vanessa é formada em Ciências da Computação pela USP.Também foi aluna visitante na Universidade de Toronto pelo programa Ciência sem Fronteiras por um ano.',
  "Master's candidate at University of São Paulo. Vanessa did her undergraduate course in Computer Science at USP. She was an exchange student at University of Toronto through the Science without Borders' program."];
  $scope.people.diego = ['Professor Doutor da Universidade de São Paulo (USP). Diego é formado em Engenharia de Computação pela USP e Doutor também pela USP. Sua tese de doutorado recebeu o Prêmio Tese Destaque USP.',
  "Professor at University of São Paulo (USP). Diego did his undergraduate course in Computer Engineering at USP and he received his PhD at USP. His PhD thesis was selected as the best one at USP between 2012 and 2013."];
  $scope.people.edilson = ["Estudante de mestrado na Universidade de São Paulo. Edilson é formado em Ciências da Computação pelo Centro Universitário de Formiga (UNIFOR-MG). Seu projeto de mestrado também utiliza redes complexas aplicadas ao PLN.",
  "Master's candidate at University of São Paulo. Edilson did his undergraduate course in Computer Science at Centro Universitário de Formiga (UNIFOR-MG). His Master’s project also uses complex networks applied to NLP."];
  
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


$scope.links.books = ["Para saber mais sobre redes complexas e suas aplicações em Processamento de Linguagens Naturais, sugerimos os livros apresentados a seguir:","To know more about complex networks and their application on Natural Language Processing, we suggest the following books:"];
$scope.links.sample = ["Algumas páginas do livro estão disponíveis ","A sample of the book is available "];
$scope.links.linkedInInitial = [" A imagem utilizada no topo deste site é uma rede real obtida através de conexões no LinkedIn. Essa imagem foi extraída a partir do perfil da estudante Vanessa Marinho, em 1º de Abril.  Cada vértice representa um usuário conectado com a Vanessa. Uma aresta é criada toda vez que dois usuários estão também conectados entre si. A imagem completa é apresentada abaixo. ",
"The header image from this website is a real network extracted from LinkedIn connections. This image was extracted at April, 1st from Vanessa Marinho LinkedIn profile. Each node represents a user connected to Vanessa through the social media, a link is created everytime two users are connected to each other on LinkedIn. The complete image is presented below. "];
$scope.links.linkedInMiddle = {};
$scope.links.linkedInMiddle.firstContent = ["A rede foi extraída utilizando a aplicação ","The network was extracted using the aplication "];
$scope.links.linkedInMiddle.secondContent = ["É necessário apenas conectar em seu perfil do LinkedIn e a aplicação irá criar sua rede social (esse processo pode levar alguns minutos). A aplicação também calcula algumas medidas em sua rede social, como densidade, tamanho absoluto e tamanho efetivo.",
"You just need to sign in with your LinkedIn account and the application will create your social network (it may take a while). The application also calculates some measurements in your social network, like density, absolute size and effective size."];

$scope.links.density = ["Este valor representa o número de conexões entre os contatos de um usuário dividido pelo número total de possíveis conexões. Valores próximos a 100% significam que todos (ou quase todos) os contatos estão ligados entre si. Por outro lado, valores próximos a 0 indicam um grande número de contatos desconexos uns dos outros. O valor calculado para a rede da Vanessa Marinho foi 11.4%",
"This value represents the number of ties between a user’s contacts divided by the total number of possible ties. If you get a value closer to 100%, it means that all the contacts know each other. On the other hand, as the value approaches to 0%, it means all of your contacts are disconnected from each other. The value calculated in Vanessa`s network was 11.4%"];
$scope.links.absolute = ["O número total de contatos que um usuário no LinkedIn possui. Este não é um valor muito representativo. A informação e oportunidades disponíveis em uma rede social estão mais relacionadas com a estrutura das conexões entre os contatos do que com o número total de contatos. O valor calculado para a rede da Vanessa foi 195, no dia 1º de Abril.",
"The total number of contacts a LinkedIn user has. It is not a value really useful. The information and opportunities in a social network are correlated with the structure of the ties between the contacts, not with their raw number. In Vanessa`s network, this value was 195 at April 1st."];
$scope.links.effective = ["Representa o tamanho efetivo de elementos na rede de um usuário. Em uma rede social, nem todo contato adiciona o mesmo valor para a rede. Algumas conexões entre usuários são redundantes. Portanto, essas conexões não estão verdadeiramente adicionando informação. Esta medida fornece uma estimativa do número único de clusters (grupos) que o usuário está conectado. O valor calculado para a rede da Vanessa foi 106.5, no dia 1º de Abril.",
"The ‘effective’ size of a user’s network. In a social network, not every contact adds the same value to the network. Some ties between users are 'redundant'. Therefore, these ties are not actually providing extra information. This measure gives an estimate of the unique number of clusters a user is connected to. In Vanessa`s network, this value was 106.5 at April 1st."];
$scope.links.contentTitle = ["Nós Isolados","Isolated Nodes"];
$scope.links.finalContent = ["Uma opção disponível na aplicação é a possibilidade de visualizar o nome dos contatos na rede. Com isso, torna-se interessante a análise dos vértices isolados do grande cluster (formado principalmente por pessoas da área ou relacionadas à Ciência da Computação). No canto superior direito da imagem, há dois vértices conectados entre si. Estes vértices representam dois familiares da Vanessa, ambos formados em Odontologia. Nesta rede, a maioria dos vértices isolados é formada por colegas do ensino médio. Interessantemente, o vértice que faz o papel de `bridge` é também um contato do ensino médio. `Bridges` são responsáveis por conectar dois componentes em um grafo; nessa imagem, a `bridge` conecta o grande cluster com o menor (totalmente formado por colegas do ensino médio).",
""];
 
$scope.links.conclusion = ["Para finalizar, outro aspecto interessante dessa aplicação é a possibilidade de exportar um arquivo CSV com os dados da rede de contatos do LinkedIn. Esses dados podem depois ser utilizados em outros sistemas ou para o cálculo de outras medidas. ",
"Another interesting thing on this application is the possibility to export a CSV file with the data from the LinkedIn network. This data can later be used in other systems and to extract other measurements. "];

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