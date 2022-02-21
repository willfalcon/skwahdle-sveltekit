import { writable } from 'svelte/store';

const letters = writable([
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]);

const workingRow = writable(0);
const workingBox = writable(0);

export { letters, workingRow, workingBox };
