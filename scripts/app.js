//ES6 Conventions are incompatible with  gulp-uglify! 
//Oh no!
//Just use modules with var to keep things out of the global scope.
var Main = (function(){
    
}());
var ProjectList = (function(){
    var exported = {};
    $.getJSON('./data.json', function(data){
        console.dir(data);
    });

    //Get projects from Data JSON
   /*  var projects = JSON.parse(json).data.projects;
    for (var i = 0; i < projects.length; i++){
        console.dir(projects[i]);
    }
 */
    return exported;
    
}());