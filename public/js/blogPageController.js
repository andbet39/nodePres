/**
 * Created by andrea.terzani on 09/04/2015.
 */

app.controller('blogPageController', function($scope,$http,$location) {

    $scope.editmode = false;

    $scope.article = {'title':'Il mio primo post','content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc'};

    $scope.init = function(){

        $http.get('/articles').success(function(data){

            $scope.article =data[0];
        });
    }

    $scope.toggleEditMode = function(){
        $scope.editmode = $scope.editmode === false ? true: false;


    }

    $scope.saveArticle = function (article) {
        $http.post('/articles',article).success(function(res){
            console.log(res);
        });
    };
    $scope.updateArticle = function (article) {
        $http.put('/articles/'+ article._id ,article).success(function(res){
            console.log(res);
        });
    };



    $scope.init();
});
