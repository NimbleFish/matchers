import {array} from './index.js';

let arr = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

test('test', ()=> {
  expect(array).toEqual(arr);
});
