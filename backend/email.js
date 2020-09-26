function sendEmail(){
    Email.send({
        SecureToken : "ff765e8d-3ca3-4248-ad2f-5be9f2a12fd8",
        To : 'SamuelOrlato@gmail.com',
        From : "mailsender7923@gmail.com",
        Subject : "Contato - Site",
        Body : "Email: "+document.getElementById("email").value+"\nNome:" + document.getElementById("name").value + "\nTexto: \n" + document.getElementById("message").value
    }).then( function message(){
        alert("E-mail enviado com sucesso!")
    })
}
