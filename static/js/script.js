// Modal açma fonksiyonu
function openModal(modalType) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalIframe = document.getElementById('modal-iframe'); // Modal'daki iframe etiketi


    modalImage.style.display = 'block';
    switch (modalType) {
        case 'pace_sat':
            modalIframe.src = "../../templates/t3-sat.html" // PACE Satellite iframe
            modalIframe.style.width = '100%';
            modalIframe.style.height = "300px";
            modalIframe.style.display = 'block'; // iframe'i göster
            modalImage.style.width = '100%';
            modalImage.style.display = 'block';  // Görseli gizle
            modalImage.src = 'static/images/pace-info.jpg';

            break;
        case 'bulut_aerosol':
            modalImage.src = 'static/images/aerosol.jpg';
            modalImage.alt = 'Bulut ve Aerosol Image';
            break;
        case 'yellow':
            modalImage.src = 'static/iamges/yellow.jpg';
            modalImage.alt = 'Yellow Image';
            break;
        case 'ekosist':
            modalImage.src = 'static/images/ekosistem.jpg';
            modalImage.alt = 'Ekosistem Image';
            break;
        case 'besin_zinciri':
            modalImage.src = '/static/images/piramit.jpg';
            modalImage.alt = 'Besin Zinciri Image';
            break;
        case 'plankton':
            // İlk resmi ekle
            modalImage.src = '/static/images/son2.jpg';
            modalImage.alt = 'Plankton Image';
            break;
        default:
            modalImage.src = '';
            modalImage.alt = '';
    }

    // Modali gösterme
    modal.style.display = 'block';
}

// Modal kapatma fonksiyonu
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Sayfa yüklendiğinde modalın kapanmasını sağla
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
