$("#button1").click(function() {
    $("#map").fadeOut(); 
    $("#button1").hide();
    $(".shovel").show();
    $(".Text1").show();
});

$(".shovel").click(function() {
    $(".shovel").hide();
    $(".Text1").hide();
    $(".sand").show();
    $(".Text2").show();
});

$(".sand").dblclick(function() {
    $(".sand").hide();
    $(".Text2").hide();
    $("#chestclosed").show();
});


