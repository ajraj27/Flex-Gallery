const panels= document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');    //Includes a class of 'open' if its not there.
}

function toggleActive(e){
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');    //Includes a class of 'open-active' if its not there.
  }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
