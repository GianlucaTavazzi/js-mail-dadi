var mail_utente = prompt('Inserisci la tua mail');

var lista_mail = [ 'ciao@gmail.com' , 'rosso@gmail.com' , 'giallo@gmail.com' , 'verde@gmail.com'];

var trovata = false;

for (var i = 0; i < lista_mail.length; i++) {
    // var email_corrente = lista_mail[i]

    if (mail_utente == lista_mail[i]) {
        trovata = true;
        console.log('true');
    }
}

if (trovata == true) {
    console.log('sei in lista');
} else {
    console.log('non sei in lista');
}
