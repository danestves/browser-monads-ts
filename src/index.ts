// Dependencies
import { Nothing, isNothing } from 'nothing-mock';

// Internals
import type {Exports} from "./types"

let win = global.window;
let doc = global.document;
let nav = global.navigator;

let exports: Exports = {
  document: typeof doc !== 'undefined' ? doc : Nothing,
  exists: (variable: any) => !isNothing(variable),
  navigator: typeof nav !== 'undefined' ? nav : Nothing,
  window: typeof win !== 'undefined' ? win : Nothing,
};

export default exports;
