var fah = document.getElementById('fahrenheit');
var cel = document.getElementById('celcius');

function tempFromFToC(f){
    f = parseFloat(f);
    cel.value = (f-32)/1.8;
}

function tempFromCToF(c){
    c = parseFloat(c);
    fah.value=(c*1.8)+32;
}