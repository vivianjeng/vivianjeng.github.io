var change_roll = 0;

var extend_roll = function(){
    $("#more").show();
    change_roll = 1;
    $("#button1").hide();
    $("#button2").show();
}

var close_roll = function(){
    $("#more").hide();
    change_roll = 0;
    $("#button2").hide();
    $("#button1").show();
}

var roll_function = function(){
    if(change_roll == 1)
        close_roll();
    else   
        extend_roll();
}

$("#more").hide();
$("#button2").hide();

$('#button1').on("click",roll_function);

$('#button2').on('click',roll_function);
