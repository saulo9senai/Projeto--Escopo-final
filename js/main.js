
var app = angular.module('blog',['ngRoute'])



//Criação de suas controllers
app.controller('artigos_base', function($scope) {

});

//Configuração de criação de Rotas
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/main.html",
        controller:"artigos_base"
      })
    .when("/noticia", {
        templateUrl : "./templates/index2.html",
        controller:"artigos_base"
      })

  });