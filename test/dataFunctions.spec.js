import {filterData, sortData, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('filterBy', () => {
  it("Debería filtar las aves por su estado de conservación", () => {
    const result = [fakeData[0], fakeData[1]];
    expect(filterData(fakeData, "", 'casi-amenazado')).toEqual(result);
  });

  it("Debería filtar las aves por su estado de conservación", () => {
    const result = [fakeData[3]];
    expect(filterData(fakeData, "", 'preocupacion-menor')).toEqual(result);
  });

  it("Debería filtar las aves por su estado de conservación", () => {
    const result = [fakeData[2]];
    expect(filterData(fakeData, "", 'vulnerable')).toEqual(result);
  });
});



describe('sortData', () => {
  it("Debería ordenar de forma ascendente por nombre", () => {
    const result = [fakeData[1], fakeData[2], fakeData[3], fakeData[0]];
    expect(sortData(fakeData, 'name', 'asc')).toEqual(result);
  });

  it("Debería ordenar de forma descendente por nombre", () => {
    const result = [fakeData[0], fakeData[3], fakeData[2], fakeData[1]];
    expect(sortData(fakeData, 'name', 'desc')).toEqual(result);
    console.log(result, "descente");
  });
});

describe('computeStats', () => {
  it("Debería devolver el porcentaje de aves según el estado de conservación", () => {
    const otroResultado = computeStats(fakeData);
    expect(otroResultado.resultOne).toBe("25.00");
  });
});