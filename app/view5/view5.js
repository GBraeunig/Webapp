'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'view5Ctrl'
  });
}])

.controller('view5Ctrl', ["$scope", "$http",'$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll) {
  $scope.language = {
    selected: "en",
    availableOptions: [{name:"deutsch",short: "de"},{name:"english", short :"en"}]
  };

    $scope.gotoHighlight = function() {
      $timeout(function(){
        $location.hash("highlight");
        console.log("hit!");
        $anchorScroll();
    });
    };

  $scope.getlang = function(){
    lang = $scope.language.selected.short;
    console.log("click");
    console.log($scope.language.selected.short);
  };
  $scope.updatetree  = function(){
    $http.get("data/skos_measure.json").success(function(data){
      lang = $scope.language.selected.short;
      console.log("click");
      console.log($scope.language.selected.short);
      data = data["@graph"];
      var structData = getParent(data);
      structData = define2ndLevel(structData,data);
      structData = define3rdLevel(structData,data);
      structData = define4thLevel(structData,data);
      //console.log(structData);
      $scope.structData = structData;
    });
  };
  //get links to GLUES Datasets
  $http.get("data/output_export_skos-xl_measure.rdf.json").success(function(links){
    $scope.links = {
      repeatSelect: null,
      availableOptions: links.data,
      demo: links.data[1]
    };
  });
  //get value of selected keyword from form
  $scope.getSelection = function (){
    var selection = getElement(".keyselection");
    $scope.datasets = filterSelection(selection,$scope.links.availableOptions);
    highlightKeyword(selection);
  };
  $scope.goToAggrovoc = function(){
    var selection = getElement(".keyselection");
    $scope.aggroLink = getAggroLink(selection,$scope.links.availableOptions);
    window.open($scope.aggroLink);
  };
}]);