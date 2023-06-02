import { getRandomInt } from './number';

export function getRandomElem<T>(array: T[]): T {
    return array[getRandomInt(array.length)];
}
