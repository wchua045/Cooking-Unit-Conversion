var cups = document.getElementById("cup");
var tablespoons = document.getElementById("tablespoon");
var ounces = document.getElementById("ounce");
var grams = document.getElementById("gram");

/* Flour(Sifted) Conversions:
1/4 cup	4 Tbsp	1.06oz/0.95oz	30g/27g
1/3 cup	5 Tbsp + 1 tsp	1.41oz/1.23oz	40g/35g
1/2 cup	8 Tbsp	2.12oz/1.94oz	60g/55g
1 cup	16 Tbsp	4.24oz/3.88oz	120g/110g
*/

function fromCupsToOthers(cup){
    cup = parseFloat(cup);
    if (cup<0){
        alert("Value cannot be negative!");
        cups = "";
        return;
    }
    
    
}