angular.module('myPageApp', ['FBAngular'])
  .controller('languageController',['$scope', function($scope) {
  $scope.imageLoaded = false;
  //Content from each section
  $scope.menu = {};
  $scope.project = {};
  $scope.people = {};
  $scope.production = {};
  $scope.links = {};
  $scope.summaryStatus = "+";
  
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
  $scope.words.resources = ["Recursos","Resources"];
  $scope.words.contact = ["Contato","Contact"];
  $scope.words.nilc = ["Núcleo Interinstitucional de Linguística Computacional","Interinstitutional Center for Computational Linguistics"];
  $scope.words.usp = ["Universidade de São Paulo","University of São Paulo"];
  $scope.words.brasil = ["Brasil","Brazil"];
  $scope.words.room = ["Sala","Room"];
  $scope.words.context = ["Contexto","Context"];
  $scope.words.methods = ["Métodos","Methods"];
  $scope.words.expectedResults = ["Resultados Esperados","Expected Results"];
  $scope.words.summary = ["Resumo do Projeto", "Project Summary"];
  
  $scope.clickedValue = 0;
  
  $scope.menu.research = ['Pesquisa','Research'];
  $scope.menu.people = ['Pessoas','People'];
  $scope.menu.interesting = ['Links','Links'];
  $scope.menu.results = ["Resultados","Results"];
  $scope.menu.publications = ["Publicações","Publications"];
  $scope.menu.resources = ["Recursos","Resources"];
  $scope.menu.contact = ["Contato","Contact"];


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
  $scope.project.summary.context=['A modelagem de grafos e redes complexas vem sendo aplicada com sucesso em diferentes domínios, sendo objeto de estudo de distintas áreas que incluem, por exemplo, a matemática e a computação. Grandes avanços em tarefas de processamento de línguas naturais ocorreram com o uso de redes complexas. Exemplos dessas aplicações são a detecção de conceitos relevantes, a criação de sumarizadores extrativos automáticos e reconhecedores de autoria. Esta última tarefa, que é foco deste projeto de pesquisa, tem sido estudada com certo sucesso através da representação de redes de adjacência de palavras que conectam apenas as palavras mais próximas.', 
  'The modeling of graphs and complex networks has been successfully applied in different fields, being the object of study in different areas including, for example, mathematics and computer science. Great advances in natural language processing tasks occurred with the use of complex networks. Examples of these applications are the detection of relevant concepts, development of automatic summarizers and authorship recognition systems. The latter task, which is the focus of this research project, has been studied with some success through the representation of words adjacency networks that connect only the closest words.'];
  $scope.project.summary.gap = ["Embora redes complexas já tenham sido utilizadas para reconhecer autoria, o estado da arte ainda não foi atingido. Além disso, os modelos de redes ainda não foram combinados com técnicas tradicionais de reconhecimento de autoria.",
  "Although complex networks have been used to recognize authorship, the state of art hasn't been reached yet. In addition, the network models haven't been combined with traditional techniques yet."];
  $scope.project.summary.goal = ["O objetivo deste projeto é estender a modelagem de adjacência tradicional, escolhendo-se a janela de conexão ótima para o problema, para um dado conjunto de treinamento. Este projeto também tem como objetivo combinar fatores tradicionais com a análise topológica de redes complexas.",
  "The purpose of this project is to extend the traditional modeling, choosing the optimal connection window to the problem, for a given training set. This project also aims to combine the traditional factors with the topological analysis of complex networks."];
  $scope.project.summary.methods = ["No desenvolvimento deste projeto, redes complexas serão utilizadas para modelar textos. Entretanto, algumas alterações serão feitas na modelagem de co-ocorrência tradicional.  Em uma das etapas deste projeto, as function words serão incluídas na construção da rede de palavras. Além disso, diferentes tamanhos de janelas de conexão serão utilizados para a criação das redes de co-ocorrência. Por fim, as medidas obtidas através da análise de redes complexas serão combinadas com medidas tradicionais de reconhecimento de autoria. As alterações na modelagem tradicional serão avaliadas através do uso de vários algoritmos de reconhecimento de padrões e comparadas com outras técnicas de reconhecimento de autoria do estado da arte.",
  "In the development of this project, complex networks will be used to model different texts. However, some changes will be made in this traditional co-occurrence modeling. In one of the stages of this project, function words will be included during the construction of the words network. Additionally, different connection window sizes will be used to create the co-occurrence networks. Finally, the measures obtained through the analysis of complex networks will be combined with traditional measures used on authorship recognition. All the changes will be evaluated with different pattern recognition algorithms and compared with other authorship recognition techniques in the state of the art."];
  $scope.project.summary.expectedResults = ["Um dos resultados esperados para esse projeto é a criação de classificadores híbridos que combinem fatores tradicionais com as propriedades fornecidas pela análise topológica de redes complexas. Através da adaptação, combinação e aperfeiçoamento da modelagem, pretendemos não apenas melhorar o desempenho dos sistemas de caracterização estilística textual e reconhecimento de autoria, mas também entender melhor quais são os fatores quantitativos textuais (medidos via redes) que podem ser utilizados na área de estilometria. Os avanços obtidos durante este projeto, além de melhorarem a tarefa de reconhecimento de autoria, podem ser úteis para estudar aplicações relacionadas, como é o caso de análise de inconsistências estilísticas e plagiarismos.",
  "One of the expected results of this project is the development of hybrid classifiers that combine traditional factors with the properties provided by the topological analysis of complex networks. By adapting, combining and improving the model, we aim not only improve the performance of textual stylistic characterization and authorship recognition systems, but also better understand what are the textual quantitative factors (measured through networks) that can be used in stylometry. The advances obtained during this project, besides improving the authorship recognition task, may be useful to study related applications, such as the analysis of stylistic inconsistences and plagiarism."];

  $scope.project.summary.moreInfo = ["Obs.: Mais informações sobre o projeto estão disponíveis na opção 'Pesquisa' do menu acima ou clicando ", "PS.: More information about the project is available at the option 'Research' in the above menu or clicking "];

  $scope.project.information = ['Projeto de Pesquisa','Research Project'];

  $scope.project.footnote = [['Nas redes de adjacência convencionais, apenas palavras vizinhas são conectadas.','Tais palavras são úteis em estratégias tradicionais de reconhecimento de autoria não baseadas em grafos.'],["In standard adjacency networks, only neighboring words are connected.","These words are useful in traditional strategies of authorship recognition not based on graphs."]];

  $scope.project.title = {};
  $scope.project.title.title = ['Título', 'Title'];
  $scope.project.title.content = ["Desenvolvimento de novos modelos para reconhecimento de autoria com a utilização de redes complexas.", "Development of new models for authorship recognition using complex networks."];

  $scope.project.date = {};
  $scope.project.date.title = ['Datas', 'Dates'];
  $scope.project.date.subtitle1 = ['Data de Início',"Start Date"];
  $scope.project.date.subtitle2 = ['Data Esperada de Defesa',"Defense Expected Date"];
  $scope.project.date.content1 = ['Fevereiro de 2015',"February of 2015"];
  $scope.project.date.content2 = ['Fevereiro de 2017',"February of 2017"];

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
  $scope.project.motivation.content = ['A tarefa de reconhecimento de autoria tem sido estudada com sucesso através da representação de redes de adjacência de palavras. Nos últimos anos, a quantidade de textos disponíveis e de fácil acesso na Web revelou o potencial da análise de autoria em diferentes aplicações. Esta tarefa é bastante relevante dentro da área de processamento de línguas naturais contribuindo para diversos avanços na literatura, história, serviços de inteligência, computação forense e também em investigações criminais ou até mesmo para interceptar mensagens terroristas. Outra aplicação se dá no contexto do plagiarismo, pois é possível identificar trechos de plágios e inconsistências estilísticas a partir da tarefa de verificação de autoria. A importância desta tarefa se torna ainda mais evidente também quando se deseja estimar a similaridade de textos.',
  "The authorship recognition task has been successfully studied through the representation of words in adjacent networks. In the last few years, the amount of available and accessible text on the Web revealed the potential of authorship analysis in different applications. This task is very important in the natural language processing area, contributing to many advances in the literature, history, intelligence services, computer forensics, as well as in criminal investigations or even intercepting terrorist messages. Another application is in the context of plagiarism, it is possible to identify plagiarism and stylistic inconsistencies with the usage of an authorship verification task. The importance of this task becomes even more evident when one desires to estimate the similarity of texts."];

  $scope.project.methodology = {};
  $scope.project.methodology.development = {};
  $scope.project.methodology.evaluation = {};
  $scope.project.methodology.development.title = ["Metodologia de Desenvolvimento","Development Methodology"];
  $scope.project.methodology.development.content = ["Durante o desenvolvimento deste projeto, diversas ferramentas e métodos derivados do estudo de redes complexas serão utilizados para analisar textos em seus distintos níveis de complexidade. A modelagem de textos como redes complexas pode ser dividida em duas etapas, o pré-processamento do texto e a conexão de conceitos. Um procedimento tipicamente adotado em trabalhos de literatura é a extração das function words. Porém, em uma das etapas deste trabalho, as function words serão incluídas na construção da rede de palavras. Uma etapa do pré-processamento é a lematização. Essa etapa é feita com a utilização de um rotulador de classes gramaticais. Inicialmente, o rotulador de classes gramaticais a ser utilizado neste trabalho será o NLTK (Natural Language Toolkit). Após o pré-processamento, é necessário realizar a conexão de conceitos. Por ser formada por cadeias lineares de palavras, o modo mais simples de representar a linguagem escrita é conectar palavras adjacentes em uma rede de adjacência (ou de co-ocorrência).  Nesse tipo de rede, os vértices representam palavras e as arestas são estabelecidas entre palavras vizinhas. Um fator importante na modelagem de co-ocorrência refere-se à escolha do tamanho da janela de conexão de palavras.  Em uma das primeiras etapas deste trabalho, diferentes janelas de conexão serão utilizadas para a criação das redes de co-ocorrência. Além disso, em uma modelagem diferente, todas as palavras de uma sentença serão conectadas. Em uma outra etapa deste projeto, as medidas obtidas através da análise de redes complexas serão combinadas com medidas tradicionais de reconhecimento de autoria em um classificador hibrido.",
                                                     "During the development of this project, different tools and methods derived from the study of complex networks will be used to analyze texts in their different complexity levels. The process of modeling the text as a complex network can be divided in two steps, the pre-processing and the word connection. A procedure typically used in the literature is the extraction of function words. However, in one stage of this project, the function words will be included in the network construction. A pre-processing step is the lemmatization of the words. This step is performed with the use of a labeler of grammatical classes. Initially, the labeler of grammatical classes to be used in this work will be NLTK (Natural Language Toolkit). After the pre-processing step, it is necessary to connect the words. Because the language is formed by linear chains of words, the simplest way to represent written language is to connect adjacent words in a adjacency network (or co-occurrence network). In this type of network, the vertices represent words and the edges are created between neighboring words. An important factor in co-occurrence modeling refers to the choice of the connection window size. In one of the first steps of this project, different connection window sizes will be used to create the co-occurrence networks. Moreover, in a different modeling, all the words of a sentence will be connected. In another stage of this project, the measures obtained through the complex network analysis will be combined with traditional measures in a hybrid classifier."];
  $scope.project.methodology.evaluation.title = ["Metodologia de Avaliação","Evaluation Methodology"];
  $scope.project.methodology.evaluation.content = ["As alterações na modelagem de co-ocorrência tradicional, assim como o classificador híbrido desenvolvido, serão avaliados com o uso de diversos algoritmos de reconhecimento de padrões, como Naive Bayes, Support Vector Machines e kNN (k Nearest Neighbors). Com o uso desses algoritmos, pretende-se avaliar a taxa de acerto da tarefa de reconhecimento de autoria. Os resultados obtidos serão comparados com as técnicas tradicionais de reconhecimento de autoria. Infelizmente, na área de reconhecimento de autoria não há benchmarks disponíveis para o teste dos métodos.",
"The modifications in the traditional modelling, together with the hybrid classifier, will be evaluated with the use of different recognition pattern algorithms, like Naive Bayes, Support Vector Machines and kNN (k Nearest Neighbors). With the use of these algorithms, we aim to evaluate the success rate of the authorship recognition task. The results will be compared with traditional techniques of authorship recognition. Unfortunately, in the authorship recognition area there is no available benchmark to test the methods."];

$scope.production.firstContent = ["Por estar em um estágio inicial da pesquisa, esse projeto ainda não resultou em nenhuma publicação.","As we are at an early research stage, this project hasn't produced any publication yet."];
$scope.production.secondContent = ["A seguir, alguns artigos, teses e dissertações relacionados ao projeto são apresentados.  Vale a pena destacar que muitos desses trabalhos são do professor Dr. Diego Amancio.", "In this topic, some publications, theses and dissertations related to this project are presented. It is worth noting that many of these works are results of Professor Diego Amancio’s research work."];

$scope.resources = {};
$scope.resources.description = ["Esta página contém alguns recursos criados durante este projeto, como planilhas, apresentações e os futuros documentos de qualificação e dissertação de mestrado.",
"This page will store some resources created during this project, like spreedsheets, presentations, Vanessa’s future qualification document and Dissertation."];
$scope.resources.resource1 = ["Lista dos 50 livros de diferentes autores que serão utilizados na primeira etapa desse projeto (Avaliação do tamanho da janela de conexão)",
"List of the 50 books from different authors that will be used in the first stage of this project (Evaluating the connection window size)"];
$scope.resources.resource2 = ["Arquivo com oito medidas calculadas em uma pequena amostra de 5 livros, utilizando diferentes janelas de conexão",
"A file with eight network measurements calculated in a small sample of 5 books, using different connection window sizes"];
$scope.resources.resource3 = ["O projeto submetido no pedido de bolsa de Mestrado da FAPESP",
"The project submitted to apply for a Fapesp scholarship"];
$scope.resources.resource4 = ["Resultados do artigo para a disciplina de Aprendizado de Maquina",
"Results of the paper from the Machine Learning course"];

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
$scope.links.finalContent = ["Na aplicação Socilab, também é possível visualizar o nome dos contatos na rede. Com isso, torna-se interessante olhar para os vértices isolados do grande cluster (formado principalmente por pessoas da área ou relacionadas à Ciência da Computação). No canto superior direito da imagem, há dois vértices conectados entre si. Estes vértices representam dois familiares da Vanessa, ambos formados em Odontologia. Nesta rede, a maioria dos vértices isolados (sem nenhuma conexão) é formada por colegas do ensino médio. Interessantemente, o vértice que faz o papel de `bridge` é também um contato do ensino médio. ‘Bridges’ são responsáveis por conectar dois componentes em uma rede; nessa imagem, a ‘bridge’ conecta o grande cluster com o menor (totalmente formado por colegas do ensino médio).",
"In the Socilab application, it is also possible to visualize the name of the contacts in the network. Using this, an interesting thing is to look to the vertices that are isolated from the big cluster (formed mainly by people from Computer Science or related areas). On the top right corner of the image, there are two nodes connected to each other. These nodes are Vanessa’s relatives, both graduated in Dentistry. In this network, most of the isolated nodes (not connecting to anyone) are colleagues from high school. Interestingly, the node that plays the ‘bridge’ role is also a contact from high school. ‘Bridges’ are responsible for connecting two components in a network; in that image, the ‘bridge’ connects the big cluster with a small one (formed totally by high school colleagues)."];
 
$scope.links.conclusion = ["Para finalizar, outro aspecto interessante dessa aplicação é a possibilidade de exportar um arquivo CSV com os dados da rede de contatos do LinkedIn. Esses dados podem depois ser utilizados em outros sistemas ou para o cálculo de outras medidas. ",
"Another interesting thing on this application is the possibility to export a CSV file with the data from the LinkedIn network. This data can later be used in other systems and to extract other measurements. "];

  var scroll = function(){

   $('html, body').animate({
          scrollTop: $("#pageContent").offset().top - 10
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

    $("#resources").click(function(e){
      $scope.clickedValue = 6;
      $scope.$apply();
      scroll();
  });

     $("#contact").click(function(e){
      $scope.clickedValue = 7;
      $scope.$apply();
      if($scope.imageLoaded == false){
        var mapCanvas = document.getElementById('map-canvas');
        var position =new google.maps.LatLng(-22.0075349,-47.8953675);
        var mapOptions = {
            center: position,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: 'NILC'
        });
        $scope.imageLoaded = true;
      }
      scroll();
  });
}]);