const estateElements = document.querySelectorAll('.top-estate');
const backdropElement = document.querySelector('.backdrop');
const modalElement = document.querySelector('.modal-estate');
const cancelModalBtn = document.querySelector('.modal-estate__btn--cancel');



for(i = 0; i < estateElements.length; i++){
     estateElements[i].addEventListener('click', function(){
        backdropElement.classList.add('open');
        modalElement.classList.add('opengrid');
     });
}


function closeModal(){
    backdropElement.classList.remove('open');
    modalElement.classList.remove('opengrid');
}

cancelModalBtn.addEventListener('click',function(){
    closeModal();
});

backdropElement.addEventListener('click',function(){
    closeModal();
});

