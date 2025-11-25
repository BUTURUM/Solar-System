const system = document.querySelector('.system');
const board = document.querySelector('.select-board');

board.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON'){
    updatePlanet(event.target.getAttribute('data-planet'));
  }
});

function updatePlanet(name){
  let button = board.querySelector(`button[data-planet="${name}"]`);
  let planet = system.querySelector('#' + name);

  resetPlanet();

  button.classList.add('current');
  planet.classList.add('current');
}

function resetPlanet(){
  for(let child of system.children)
    child.classList.remove('current');

  for(let child of board.children)
    child.classList.remove('current');
}