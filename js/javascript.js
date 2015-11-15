$(document).ready(function() {

    $("#prava").toggle(function() {
        $("#cutatu p").html("Man begreift schwer beim Erleben dieser 'großen Zeit', daß man dieser verrückten, verkommenen Spezies angehört, die sich Willensfreiheit zuschreibt. Wenn es doch irgendwo eine Insel der Wohlwollenden und Besonnenen gäbe!");
        $("#cutatu .author").html("Albert Einstein");
    }, 
    function() {
    $("#cutatu p").html("It's crucial that people don't see my election as somehow a symbol of progress in the broader sense, that we don't sort of point to (me) any more than you point to a Bill Cosby or a Michael Jordan and say.");
        $("#cutatu .author").html("Barak Obama");
    },
    function() {
     $("#cutatu p").html("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type.");
        $("#cutatu .author").html("John Dove");
    }
    );

    
    $("#liva").toggle(function() {
            $("#cutatu p").html("It's crucial that people don't see my election as somehow a symbol of progress in the broader sense, that we don't sort of point to (me) any more than you point to a Bill Cosby or a Michael Jordan and say.");
        $("#cutatu .author").html("Barak Obama");
    }, 
    function() {
        $("#cutatu p").html("Man begreift schwer beim Erleben dieser 'großen Zeit', daß man dieser verrückten, verkommenen Spezies angehört, die sich Willensfreiheit zuschreibt. Wenn es doch irgendwo eine Insel der Wohlwollenden und Besonnenen gäbe!");
        $("#cutatu .author").html("Albert Einstein");
    },
    function() {
     $("#cutatu p").html("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type.");
        $("#cutatu .author").html("John Dove");
    }
    );
});

