var cups = document.getElementById("cup");
var sticks = document.getElementById("stick");
var grams = document.getElementById("gram");
var ounces = document.getElementById("ounce");


function butterFromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups.value = "";
        return;
    }
    grams.value = Math.round(cup * 227);
    sticks.value = roundTo((cup * 2), 2);
    ounces.value= roundTo(cup * 8, 2);
}

function butterFromSticksToOthers(stick){
    stick = parseFloat(stick);
    if (stick<0){
        alert("Value cannot be negative!");
        sticks.value = "";
        return;
    }
    grams.value = Math.round(stick * 113.5);
    cups.value = roundTo((stick * 0.5), 2);
    ounces.value= roundTo(stick * 4, 2);
}

function butterFromGramsToOthers(gram){
    gram = parseFloat(gram);
    if (gram<0){
        alert("Value cannot be negative!");
        grams.value = "";
        return;
    }
    sticks.value = roundTo((gram * 0.00881057),2);
    cups.value = roundTo((gram * 0.004405286), 2);
    ounces.value=roundTo(gram * 0.03524229, 2);
}


function butterFromOuncesToOthers(ounce){
     ounce = parseFloat(ounce);
    if (ounce<0){
        alert("Value cannot be negative!");
        ounces.value = "";
        return;
    }
    sticks.value = roundTo((ounce * 0.25),2);
    cups.value = roundTo((ounce * 0.125), 2);
    grams.value= Math.round(ounce * 28.3495);
}

function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }