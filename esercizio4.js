// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

function VerificaStringaPalindroma (input) {
    let stringa = input.replace(/\s/g,"").toLowerCase();
    let stringaReverse = stringa.split("").reverse().join("");
    return stringa === stringaReverse;
} 

let input = prompt("Inserisci una stringa e ti dirò se è palindroma");

if (VerificaStringaPalindroma(input)) {
    alert("La stringa è palindroma");
} else {
    alert("La stringa non è palindroma");
}


//I topi non avevano nipoti
