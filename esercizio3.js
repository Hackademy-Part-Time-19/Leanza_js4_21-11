// Stampare i valori https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999 - stampare i SOLO valori dei parametri dopo il "?"

let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999";

let SezioneURL = url.split("?")[1];
console.log(SezioneURL);