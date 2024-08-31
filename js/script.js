function openModal(src) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var closeModalButton = document.querySelector('.close');
    
    modal.style.display = "block";
    modalImg.src = src;
    
    closeModalButton.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    var closeModalButton = document.querySelector('.close');
    
    modal.style.display = "none";
    closeModalButton.style.display = "none";
}


