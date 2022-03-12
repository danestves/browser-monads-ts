// Dependencies
import { Nothing, isNothing } from 'nothing-mock';

if (global === undefined) {
  (window as any).global = window;
}

const win = global.window;
const doc = global.document;
const nav = global.navigator;

export default {
  document: typeof doc !== 'undefined' ? doc : Nothing,
  exists: (variable: any) => !isNothing(variable),
  navigator: typeof nav !== 'undefined' ? nav : Nothing,
  window: typeof win !== 'undefined' ? win : Nothing,
};
