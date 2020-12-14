var cups = document.getElementById("cup");
var tablespoons = document.getElementById("tablespoon");
var grams = document.getElementById("gram");
var ounces = document.getElementById("ounce");


function oilFromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups.value = "";
        return;
    }
    grams.value = Math.round(cup * 213);
    tablespoons.value = roundTo((cup * 16), 2);
    ounces.value= roundTo(cup * 7.5109, 2);
}

function oilFromTbspnsToOthers(tbspn){
    tbspn = parseFloat(tbspn);
    if (tbspn<0){
        alert("Value cannot be negative!");
        tablespoons.value = "";
        return;
    }
    grams.value = Math.round(tbspn * 13.308);
    cups.value = roundTo((tbspn * (1/16)), 2);
    ounces.value= roundTo(tbspn * 0.46943, 2);
}

function oilFromGramsToOthers(gram){
    gram = parseFloat(gram);
    if (gram<0){
        alert("Value cannot be negative!");
        grams.value = "";
        return;
    }
    tablespoons.value = roundTo((gram * 0.075987),2);
    cups.value = roundTo((gram * 0.004749), 2);
    ounces.value=roundTo(gram * 0.035269, 2);
}


function oilFromOuncesToOthers(ounce){
     ounce = parseFloat(ounce);
    if (ounce<0){
        alert("Value cannot be negative!");
        ounces.value = "";
        return;
    }
    tablespoons.value = roundTo((ounce * 2.08),2);
    cups.value = roundTo((ounce * 0.134636), 2);
    grams.value= Math.round(ounce * 28.349);
}

function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }