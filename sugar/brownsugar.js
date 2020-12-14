var cups = document.getElementById("cup");
var tablespoons = document.getElementById("tbspn");
var grams = document.getElementById("gram");
var ounces = document.getElementById("ounce");


function brownFromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups.value = "";
        return;
    }
    grams.value = Math.round(cup * 200);
    tablespoons.value = roundTo((cup * 16), 2);
    ounces.value= roundTo(cup * 7.093594, 2);
}

function brownFromTbspnsToOthers(tbspn){
    tbspn = parseFloat(tbspn);
    if (tbspn<0){
        alert("Value cannot be negative!");
        tablespoons.value = "";
        return;
    }
    grams.value = Math.round(tbspn * 12.56875);
    cups.value = roundTo((tbspn * (1/16)), 2);
    ounces.value= roundTo(tbspn * 0.44335, 2);
}

function brownFromGramsToOthers(gram){
    gram = parseFloat(gram);
    if (gram<0){
        alert("Value cannot be negative!");
        grams.value = "";
        return;
    }
    tablespoons.value = roundTo((gram * 0.079562),2);
    cups.value = roundTo((gram * 0.004973), 2);
    ounces.value=roundTo(gram * 0.035274, 2);
}


function brownFromOuncesToOthers(ounce){
     ounce = parseFloat(ounce);
    if (ounce<0){
        alert("Value cannot be negative!");
        ounces.value = "";
        return;
    }
    tablespoons.value = roundTo((ounce * 2.255556),2);
    cups.value = roundTo((ounce * 0.140972), 2);
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