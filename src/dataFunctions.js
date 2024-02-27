// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  //console.log(filterBy);
  if (value === "preocupacion-menor") {
    const filterDataConservation = data.filter(bird => bird.facts.conservationStatus === "Preocupación menor")
    return filterDataConservation
  } else if (value === "casi-amenazado") {
    const filterDataConservation = data.filter(bird => bird.facts.conservationStatus === "Vulnerable")
    return filterDataConservation
  } else if (value === "vulnerable") {
    const filterDataConservation = data.filter(bird => bird.facts.conservationStatus === "En peligro")
    return filterDataConservation
  }
}

export const sortData = (data, orderBy, value) => {
  const copyData = [...data];
  const sortedData = copyData.sort((a, b) => {
    if (value === 'asc') {
      return a[orderBy].localeCompare(b[orderBy])
    } else {
      return b[orderBy].localeCompare(a[orderBy])
    }
  })
  //console.log(sortedData)
  return sortedData;
}

export const computeStats = (data) => {
  const staticItems = data.reduce((acc, item) => {
    if (!acc[item.facts.conservationStatus]){
      acc[item.facts.conservationStatus] = 1;
    } else {
      acc[item.facts.conservationStatus]++;
    }
    // console.log(acc);
    return acc;
  }, {});
  const staticConservationOne = staticItems["Preocupación menor"];
  const staticConservationTwo = staticItems["En peligro"];
  const staticConservationThree = staticItems["Vulnerable"];
  const resultOne = ((100*staticConservationOne)/data.length).toFixed(2);
  const resultTwo = ((100*staticConservationTwo)/data.length).toFixed(2);
  const resultThree = ((100*staticConservationThree)/data.length).toFixed(2);
  //console.log(resultOne);
  //console.log ({resultOne, resultTwo, resultThree});
  return {resultOne, resultTwo, resultThree};

  //return staticItems;
}