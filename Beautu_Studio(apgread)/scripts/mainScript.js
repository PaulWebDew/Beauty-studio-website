const noClick = document.querySelector('.noClick');

noClick.addEventListener('click', prevDefoult);

function prevDefoult(event) {
   if (event.target.classList.contains('nCl')) {
      event.preventDefault();
   }
}

