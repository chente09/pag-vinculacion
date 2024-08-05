const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_06q3hvc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Email Enviado con Exito';
                alert('Tu Comentario Ha Sido Enviado!');
            }, (err) => {
                btn.value = 'Email Enviado con Exito';
                alert(JSON.stringify(err));
            });
    });