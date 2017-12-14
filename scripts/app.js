var data = {
    "data": {
        "projects": [
            {
                "title": "GitHub Pages Static Portfolio",
                "technologies": ["Git", "NodeJS", "CSS", "HTML", "JSON", "jQuery"]   
            },
            {
                "title": "Personal dynamic portfolio"
            },
            {
                "title": "Minecraft Server"
            },
            {
                "title": "ODU Minicon Webpage"
            }

        ],
        "contact": {

        }
    }
};
//ES6 Conventions are incompatible with  gulp-uglify! 
//Oh no!
//Just use modules with var to keep things out of the global scope.
var Main = (function(){
    
}());
var ProjectList = (function(data){
    var exported = {};
    

     var projects = data.data.projects;
    for (var i = 0; i < projects.length; i++){
        console.dir(projects[i]);
    }
    return exported;
    
}(data));