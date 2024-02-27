//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, sortData, computeStats} from './dataFunctions.js';

const selectOrder = document.getElementById('order');
const selectFilter = document.getElementById('filter');

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

//console.log(example, renderItems(data), data);
const filter = document.querySelector('#filter');
selectFilter.selectedIndex = "";
filter.addEventListener('change', () => {
  root.innerHTML= "";
  const datafilter = filterData (data, 'conservationStatus', filter.value)
  root.appendChild(renderItems(datafilter));
})

const order = document.querySelector('#order');
selectOrder.selectedIndex = "";
order.addEventListener('change', () => {
  root.innerHTML= "";
  const datasort = sortData (data, 'name', order.value)
  root.appendChild(renderItems(datasort));
})

const clean = document.querySelector('#reset-button');
clean.addEventListener('click', () => {
  selectOrder.selectedIndex = "";
  selectFilter.selectedIndex = "";
  root.innerHTML= "";
  root.appendChild(renderItems(data));

})

/*const search = document.querySelector('#search');
search.addEventListener('keyup', e => {
  if (e.target.matches("birdData.name")){
    document.querySelectorAll ()
  }
  //console.log(e.target.value);
})*/

const openStatistics = document.querySelector('#buttonStatistics');
const windowStatistics = document.querySelector('#statisticsWindowOpen');
const cerrarStatistics = document.querySelector('#statisticsWindowClose');
openStatistics.addEventListener("click",()=>{
  windowStatistics.showModal();
  const statisticsContent = document.querySelector('.contentStatistics');
  const staticBird = computeStats(data);
  //console.log (staticBird.resultOne);
  
  statisticsContent.innerHTML = ("<p class='statisticTitle'> De las 24 especies de aves elegidas que habitan en América Latina su estado de conservación son: </p>");
  statisticsContent.innerHTML += ("<p class='statisticOne'>  </p>");
  statisticsContent.innerHTML += ("Preocupación Menor son:   "+ (staticBird.resultOne) + "%"); 
  statisticsContent.innerHTML += ("<p class='statisticOne'>  </p>");
  statisticsContent.innerHTML += ("En peligro de extinción son:   "+ (staticBird.resultTwo) + "%"); 
  statisticsContent.innerHTML += ("<p class='statisticOne'>  </p>");
  statisticsContent.innerHTML += ("En estado vulnerable:   "+ (staticBird.resultThree) + "%"); 
   

  /*console.log(staticBird, "VER ESTADISTICAS");
  staticBird.innerHTML;*/
})


/*
const std = document.getElementById('myChart')
const names = ['Ronn', 'Daisy', 'Madelein']
const ages = [17, 42, 13]
const myChart = new CharacterData(std, {
  type: 'pie',
  data: {
    labels: names,
    datasets: [{
      label: 'Edad',
      data: ages,
      backgroundColor: [
        'rgba (255, 99, 132, 0.2)',
        'rgba (54, 162, 235, 0.2)',
        'rgba (255, 206, 86, 0.2)',
        'rgba (75, 192, 192, 0.2)',
        'rgba (153, 102, 255, 0.2)',
        'rgba (255, 159, 64, 0.2)'
      ],
      borderWidth: 1.5
    }]
  }
})*/
cerrarStatistics.addEventListener("click",()=>{
  windowStatistics.close();
})
/*
const openInfo = document.querySelectorAll('#buttonInfo');
const windowInfo = document.querySelector('#infoBird');
const cerrarInfo = document.querySelector('#closeInfo');
openInfo.addEventListener("click",()=>{
  windowInfo.showModal();
})
cerrarInfo.addEventListener("click",()=>{
  windowInfo.close();
})*/