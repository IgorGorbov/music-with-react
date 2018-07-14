let arr = [
  { id: 1, name: 'Igor' },
  { id: 2, name: 'Igor2' },
  { id: 3, name: 'Igor3' },
];

let arrNew = arr.reduce((newArr, obj) => [...newArr, { [obj.id]: obj }], []);

console.log(arrNew);

let arrOld = arrNew.reduce(
  (newArr, obj) => [...newArr, ...Object.values(obj)],
  [],
);

console.log('');

console.log(arrOld);
