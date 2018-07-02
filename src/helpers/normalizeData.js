import { values } from 'ramda';

export const arrToMap = arr => values(arr);

export function mapToArr(obj) {
  return obj.valueSeq().toArray();
}
