export const renderItems = (data) => {
  
  const birdData = data;
  const cardsContainer= document.createElement('ul');
     
  cardsContainer.className = 'cardsContainer';
  for (let i=0; i<birdData.length; i++) {
    const li = document.createElement('li');
    li.innerHTML= `
      <div class='imgAndName'>
        <img class='cardImg' src='${birdData[i].imageUrl}' alt="fotografía de '${birdData[i].name}'">
        <div class='cardNames'>
          <p1>${birdData[i].name}</p>
          <p2 class='scientificName'>${birdData[i].facts.scientificName}</p>
        </div>
      </div>
      <div class= 'birdFacts'>
        <p1>Hábitat: ${birdData[i].facts.birdHabitat}</p>
        <p2>Tamaño: ${birdData[i].facts.birdLength}</p>
        <p3>Estado de conservación: ${birdData[i].facts.conservationStatus}</p>
      </div> 
    `
    //uso interpolación de cadenas para estructurar bien el HTML*/

    li.setAttribute('itemscope', '') // se renderizará (visualizará en html): <li itemscope=''>
    li.setAttribute('itemtype', 'avesDeLatam') // se renderizará (visualizará en html): <li itemtype='avesDeLatam'>
    li.className= 'card'
    cardsContainer.appendChild(li)
  }
  return cardsContainer;
};

/*<button id= "buttonInfo"> ... más </button>
<dialog id="infoBird">
  <button id="closeInfo"> X </button>
  <h1 id="titleInfo"> DESCRIPCIÓN </h1>        
     <p1 class='contentBird'> ${birdData[i].description}</p>
  </dialog>*/