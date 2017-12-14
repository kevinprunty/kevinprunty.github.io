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