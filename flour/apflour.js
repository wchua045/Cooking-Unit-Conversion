var cups = document.getElementById("cup");
var tablespoons = document.getElementById("tbspn");
var ounces = document.getElementById("ounce");
var grams = document.getElementById("gram");

/* Flour(Sifted) Conversions:
1/4 cup	4 Tbsp	1.06oz/0.95oz	30g/27g
1/3 cup	5 Tbsp + 1 tsp	1.41oz/1.23oz	40g/35g
1/2 cup	8 Tbsp	2.12oz/1.94oz	60g/55g
1 cup	16 Tbsp	4.24oz/3.88oz	120g/110g
*/

function apFromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups.value = "";
        return;
    }
    grams.value = Math.round(cup * 120);
    ounces.value = roundTo((cup * 4.24),2);
    tablespoons.value = roundTo((cup * 16), 2);
}

function apFromTbspnsToOthers(tbspn){
    tbspn = parseFloat(tbspn);
    if (tbspn<0){
        alert("Value cannot be negative!");
        tablespoons.value = "";
        return;
    }
    grams.value = Math.round(tbspn * 7.5);
    ounces.value = roundTo((tbspn * 0.265),2);
    cups.value = roundTo((tbspn * (1/16)), 2);
}

function apFromOuncesToOthers(ounce){
    ounce = parseFloat(ounce);
    if (ounce<0){
        alert("Value cannot be negative!");
        ounces.value = "";
        return;
    }
    grams.value = Math.round(ounce * 28.30);
    tablespoons.value = roundTo((ounce * 3.77358491),2);
    cups.value = roundTo((ounce * 0.235849), 2);
}

function apFromGramsToOthers(gram){
    gram = parseFloat(gram);
    if (gram<0){
        alert("Value cannot be negative!");
        grams.value = "";
        return;
    }
    ounces.value = roundTo((gram * 0.0353), 2);
    tablespoons.value = roundTo((gram * 0.1333),2);
    cups.value = roundTo((gram * 0.008333), 2);
}


function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return Math.round(n) / multiplicator;
    }