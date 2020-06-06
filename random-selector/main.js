let randomChildNumber;
$(document).ready(function(){
    $("#a").hide();
    $("input").click(function(){
        $("#map").attr("src","");
    $("#real").attr("src","");
        let numberOfListItem = $("#choices li").length;
        randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber])
        $("a").show();
    });
});

function showmap(){
    $("#a").hide();
    $("#map").attr("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyDNI-3B-xYwMU0GOVvieXsfy8LU8sIUZ_s&q="+place[randomChildNumber][0]);
    $("#real").attr("src","https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDNI-3B-xYwMU0GOVvieXsfy8LU8sIUZ_s&location="+place[randomChildNumber][1]+"&heading=60&pitch=30&fov=90");
}