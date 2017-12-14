var ProjectList = (function(data){
    var exported = {};
    

     var projects = data.data.projects;
    for (var i = 0; i < projects.length; i++){
        console.dir(projects[i]);
    }
    return exported;
    
}(data));