//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, sortData} from './dataFunctions.js';

const selectOrder = document.getElementById('order');
const selectFilter = document.getElementById('filter');

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

//console.log(example, renderItems(data), data);
const filter = document.querySelector('#filter');
filter.addEventListener('change', () => {
  root.innerHTML= "";
  const datafilter = filterData (data, 'conservationStatus', filter.value)
  root.appendChild(renderItems(datafilter));
})

const order = document.querySelector('#order');
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
})
/*const std = document.getElementById('myChart')
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
