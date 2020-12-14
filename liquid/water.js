var cups = document.getElementById("cup");
var tablespoons = document.getElementById("tbspn");
var milliliters = document.getElementById("milliliter");
var grams = document.getElementById("gram");
var ounces = document.getElementById("ounce");
var founces = document.getElementById("founce");


function waterFromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups.value = "";
        return;
    }
    grams.value = Math.round(cup * 237);
    milliliters.value = Math.round((cup * 237),2);
    tablespoons.value = roundTo((cup * 16), 2);
    founces.value= roundTo( cup * 8,2);
    ounces.value= roundTo(cup * 8.345404, 2);
}

function waterFromTbspnsToOthers(tbspn){
    tbspn = parseFloat(tbspn);
    if (tbspn<0){
        alert("Value cannot be negative!");
        tablespoons.value = "";
        return;
    }
    grams.value = Math.round(tbspn * 14.786765);
    milliliters.value = Math.round((tbspn * 14.786765),2);
    cups.value = roundTo((tbspn * (1/16)), 2);
    founces.value= roundTo(tbspn * 0.5, 2);
    ounces.value= roundTo(tbspn * 0.521588, 2);
}

function waterFromMLsToOthers(milliliter){
    milliliter = parseFloat(milliliter);
    if (milliliter<0){
        alert("Value cannot be negative!");
        milliliters.value = "";
        return;
    }
    grams.value = milliliter;
    tablespoons.value = roundTo((milliliter * 0.067628),2);
    cups.value = roundTo((milliliter * 0.004227), 2);
    founces.value=roundTo(milliliter * 0.033814, 2);
    ounces.value= roundTo(milliliter * 0.035274, 2);
}

function waterFromGramsToOthers(gram){
    gram = parseFloat(gram);
    if (gram<0){
        alert("Value cannot be negative!");
        grams.value = "";
        return;
    }
    milliliters.value = gram;
    tablespoons.value = roundTo((gram * 0.067628),2);
    cups.value = roundTo((gram * 0.004227), 2);
    founces.value=roundTo(gram * 0.033814, 2);
    ounces.value=roundTo(gram * 0.035274, 2);
}

function waterFromOuncesToOthers(ounce){
     ounce = parseFloat(ounce);
    if (ounce<0){
        alert("Value cannot be negative!");
        ounces.value = "";
        return;
    }
    milliliters.value = Math.round(ounce * 28.349523);
    tablespoons.value = roundTo((ounce * 1.917223),2);
    cups.value = roundTo((ounce * 0.119826), 2);
    founces.value= roundTo((ounce * 0.958611), 2);
    grams.value= Math.round(ounce * 28.349523);
}

function waterFromFOuncesToOthers(founce){
    founce = parseFloat(founce);
    if (founce<0){
        alert("Value cannot be negative!");
        founces.value = "";
        return;
    }
    milliliters.value = Math.round(founce * 29.57353);
    tablespoons.value = roundTo((founce * 2),2);
    cups.value = roundTo((founce * 0.125), 2);
    ounces.value = roundTo(founce * 1.043176, 2);
    grams.value = Math.round(founce * 29.57353);
}


function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }