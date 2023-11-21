//Ordinare questa lista prima secondo il campo nome e poi secondo il campo prezzo.


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
        nome: "Lampadarui",
        prezzo: 600,
    },
]

// ordinamento per nome

let listaOrdinataPerNome =listaProdotti.sort((a, b) => {
    let nomeA = a.nome.toUpperCase();
    let nomeB = b.nome.toUpperCase();

    if (nomeA < nomeB) {
        return -1;
    }
    if (nomeA > nomeB) {
        return 1;
    }
    return 0;
});

console.log(listaProdotti);

// ordinamento per prezzo

listaProdotti.sort((a, b) => {

    if (a.prezzo < b.prezzo) {
        return -1;
    }
    if (a.prezzo > b.prezzo) {
        return 1;
    }
    return 0;
});

console.log(listaProdotti);

