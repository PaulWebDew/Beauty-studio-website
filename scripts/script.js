

const contacts = document.querySelector('#contacts');
const contactsBtn = document.querySelector('#contactsBtn');
const closeBtn = document.querySelector('#closeBtn');
const wrap = document.querySelector('#wrap');
const body = document.querySelector('body');
const pedicur = document.querySelector('#pedicur');
const workList = document.querySelector('.workList');
const pedicureList = document.querySelector('.pedicureList');
const manicureList = document.querySelector('.manicureList');
const hairList = document.querySelector('.hairList');
const ulList = document.querySelector('#ulList');
const liItems = document.querySelectorAll('.li_item');


const btnMenu = document.querySelector('.btn');


contactsBtn.addEventListener('click', removeHidden);
closeBtn.addEventListener('click', addHidden);
btnMenu.addEventListener('click', menuHandler);



function removeHidden(event) {
   event.preventDefault()
   wrap.style.visibility = 'visible';
   contacts.classList.remove('hidden');
}

function addHidden(event) {
   event.preventDefault();
   wrap.style.visibility = 'hidden';
   contacts.classList.add('hidden');
}

function burger() {
   document.querySelector('.wrBtnMenu').classList.toggle('active');

}

function menuHandler() {
   const text = document.querySelector('.buttonText');
   const spanTop = document.querySelector('.spanTop');
   const spanMiddle = document.querySelector('.spanMiddle');
   const spanBottom = document.querySelector('.spanBottom');
   const menu = document.querySelector('.ul');
   const line = document.querySelector('#line');


   text.classList.toggle('opacityToggle')
   spanTop.classList.toggle('spanTopClose');
   spanMiddle.classList.toggle('spanMiddleClose');
   spanBottom.classList.toggle('spanBottomClose');
   menu.classList.toggle('visibily');
   line.classList.toggle('top');
}


liItems.forEach(item => item.addEventListener('click', selectActive));

function selectActive() {
   liItems.forEach(item => {
      item.classList.remove('active')
   });
   this.classList.add('active');
   if (this.id == "pedicur") {
      workList.classList.add('d-none');
      manicureList.classList.add('d-none');
      hairList.classList.add('d-none');
      pedicureList.classList.remove('d-none')
   }
   else if (this.id == "hairdres") {
      workList.classList.add('d-none');
      manicureList.classList.add('d-none');
      hairList.classList.remove('d-none');
      pedicureList.classList.add('d-none')
   }
   else if (this.id == "manicur") {
      workList.classList.add('d-none');
      manicureList.classList.remove('d-none');
      hairList.classList.add('d-none');
      pedicureList.classList.add('d-none')
   }
   else if (this.id == "showAll") {
      workList.classList.remove('d-none');
      manicureList.classList.add('d-none');
      hairList.classList.add('d-none');
      pedicureList.classList.add('d-none')
   }
}

