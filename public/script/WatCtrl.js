App.controller('WatCtrl',function($scope,$location){
    $scope.changelocation = function(path){
        $location.path(path);
    }
    $scope.BindCarousel = function(){
        $('.carousel').carousel();
    }
});