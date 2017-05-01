var change_roll = 0;
var change_maple = 0;
var change_kart = 0;

var extend_roll = function(){
    $("#more1").show();
    change_roll = 1;
    $("#button1").hide();
    $("#button2").show();
}

var extend_maple = function(){
    $("#more2").show();
    change_maple = 1;
    $("#button3").hide();
    $("#button4").show();
}

var extend_kart = function(){
    $("#more3").show();
    change_kart = 1;
    $("#button5").hide();
    $("#button6").show();
}

var close_roll = function(){
    $("#more1").hide();
    change_roll = 0;
    $("#button2").hide();
    $("#button1").show();
}

var close_maple = function(){
    $("#more2").hide();
    change_maple = 0;
    $("#button4").hide();
    $("#button3").show();
}

var close_kart = function(){
    $("#more3").hide();
    change_kart = 0;
    $("#button6").hide();
    $("#button5").show();
}

var roll_function = function(){
    if(change_roll == 1)
        close_roll();
    else   
        extend_roll();
}

var maple_function = function(){
    if(change_maple == 1)
        close_maple();
    else   
        extend_maple();
}

var kart_function = function(){
    if(change_kart == 1)
        close_kart();
    else   
        extend_kart();
}

$("#more1").hide();
$("#button2").hide();

$("#more2").hide();
$("#button4").hide();

$("#more3").hide();
$("#button6").hide();

$('#button1').on("click",roll_function);

$('#button2').on('click',roll_function);

$('#button3').on("click",maple_function);

$('#button4').on('click',maple_function);

$('#button5').on("click",kart_function);

$('#button6').on('click',kart_function);
