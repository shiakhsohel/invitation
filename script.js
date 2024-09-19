function revealCard() {
    document.getElementById('blast-effect').style.display = 'block';
    setTimeout(() => {
        document.getElementById('blast-effect').style.display = 'none';
        document.getElementById('invite-card').style.display = 'block';
    }, 1000);
}

function openDetails() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function downloadInvitation() {
    const card = document.getElementById('invite-card');
    
    html2canvas(card).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'invitation.png';
        link.click();
    });

    // Uncomment the following lines if you prefer PDF format
    /*
    html2pdf().from(card).save('invitation.pdf');
    */
}
