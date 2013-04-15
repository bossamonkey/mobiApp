var current_id = 0;
var total = 0;
var i = 0;

$(document).ready(function() {
    $('#box').draggable();
});

function createBoxes(){
    var values = $("#number").val();
    total = total + (values * 1);
    console.log(total);
    console.log(values);
    for(i; i < total; i++){
        var box = "<div class='box' id=" + i + ">&nbsp;</div>";
        $("#draggable_area").append(box);
        $("#" + i).draggable().click(function(){
            addName(this);
        });
    }
};

function addName(element){
    console.log(element.id);
    current_id = element.id;
    
    var lightbox = $("#lightbox");
    
    var top = window.innerHeight/2 - 50 + 'px';
    var left = window.innerWidth/2 - 100 + 'px';

    lightbox.css("top", top);
    lightbox.css("left", left);
    lightbox.css("visibility", "visible");
    return false;
}

function nameRoom(){
    var val = $("#new_name").val();
    box = $("#" + current_id);
    console.log($(box).html(val));
    lightbox.style.visibility = 'hidden';
}