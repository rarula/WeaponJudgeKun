import { getRandomInt } from './number';

export function getRandomElem<T>(array: T[]): T | undefined {
    return array[getRandomInt(array.length)];
}
