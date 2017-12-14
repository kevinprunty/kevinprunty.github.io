//Will store JSON in a simple JavaScript object for now until I can plan out AJAX shenanigans

var data = {
    "projects": [
        {
            "title": "GitHub Pages Static Portfolio",
            "date": "December, 2017",
            "description": "This page that you see here!",
            "technologies": ["Git", "NodeJS", "CSS", "HTML", "JSON", "jQuery"]   
        },
        {
            "title": "Personal dynamic portfolio",
            "date": "January, 2018",
            "description": "A page on a different server I can mess around with more",
        },
        {
            "title": "Minecraft Server",
            "date": "December, 2017",
            "description": "A page with information about a MC Server",
        },
        {
            "title": "ODU Minicon Webpage",
            "date": "February 2018",
            "description": "The page detailing ODU's Minicon",
        }

    ],
    "contact": {

    }

};
//ES6 Conventions are incompatible with  gulp-uglify! 
//Oh no!
//Just use modules with var to keep things out of the global scope.
var Main = (function(){
    
}());
var ProjectList = (function(data){
    var exported = {};
    var projects = data.projects;
    var $projectList = $("#project-list");

    var buildList = function(title, date, description){
        //This is where I would put a template,
        //If gulp could handle ES6
        var string = "";
        string += "<li class=\"project-item\">";
            string += "<div class='project-name'>";
                string += title;
            string += "</div>";
            string += "<div class='project-date'>";
                string += date;
            string += "</div>";
            string += "<div class='project-description'>";
                string += "<p>";
                    string += description;
                string += "</p>";
            string += "</div>";
        string += "</li>";
        return string;
    }

    var innerHTML = "";
    for (var i = 0; i < projects.length; i++){
        innerHTML += buildList(projects[i].title, projects[i].date, projects[i].description);
        console.log(innerHTML);
    }

    $projectList.html(innerHTML);
    return exported;
    
}(data));