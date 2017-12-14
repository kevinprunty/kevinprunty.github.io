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