const system = document.querySelector('.system');
const board = document.querySelector('.select-board');

window.addEventListener('hashchange', function(event){
  let newPlanet = new URL(event.newURL).hash.slice(1);
  if(!newPlanet){
    resetPlanet();
    return
  }
  updatePlanet(newPlanet);
});

(() => {
  let initialPlanet = location.hash.slice(1);
  if(initialPlanet){
    updatePlanet(initialPlanet);
  };
})();

function updatePlanet(name){
  let link = board.querySelector(`a[href="#${name}"]`);
  let planet = system.querySelector('#' + name);

  resetPlanet();

  if(link && planet){
    link.classList.add('current');
    planet.classList.add('current');
  }
}

function resetPlanet(){
  for(let child of system.children)
    child.classList.remove('current');

  for(let child of board.children)
    child.classList.remove('current');
}