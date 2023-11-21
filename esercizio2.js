// Filtrare da questa lista gli elementi con prezzo > 250: due versioni una con l’utilizzo di una funzione normale e scritta da voi, poi utilizzando il metodo filter.

let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

//  con metodo filter

let listaProdottiMaggiore250 = listaProdotti.filter((prodotto) => prodotto.prezzo > 250);
console.log(listaProdottiMaggiore250);

// con funzione normale

function prodottiMaggiore250(listaProdotti) {
    let ListaprodottiMaggiore250 = [];
    for (let i = 0; i < listaProdotti.length; i++) {
        if (listaProdotti[i].prezzo > 250) {
            ListaprodottiMaggiore250.push(listaProdotti[i]);
        }
    }
    return ListaprodottiMaggiore250;
}

let ListaprodottiMaggiore250 = prodottiMaggiore250(listaProdotti);
console.log(listaProdottiMaggiore250);
