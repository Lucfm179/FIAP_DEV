document.getElementById('whatsapp-btn').addEventListener('click', function() {
    const phoneNumber = '5511964259289'; 
    const message = encodeURIComponent('Olá, gostaria de agendar uma tatuagem.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
