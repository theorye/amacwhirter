$(document).ready(function() {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    $(".menu").click(function() {
        $(".menu").slideToggle("slow", function(){
          $(".cross").hide();
          $(".hamburger").show();
        });
    });

    $('[data-toggle="tooltip"]').tooltip({container: 'body'});

    $('img').on('click', function(event) {
        event.preventDefault();
        $("#showImg").empty();
        $("#showTitle").empty();
        $("#showBody").empty();
        var image = $(this).attr("src");
        var title = $(this).data("title");
        var body = $(this).data("text");
        $("#showImg").append("<img class='img-responsive' src='" + image + "' />");
        $("#showTitle").html(title);
        $("#showBody").append(body);
    });
});
