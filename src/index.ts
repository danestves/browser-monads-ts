// Dependencies
import { Nothing, isNothing } from 'nothing-mock';

let win = global.window;
let doc = global.document;
let nav = global.navigator;

export let document: Document = typeof doc !== 'undefined' ? doc : Nothing;
export let exists = (variable: any) => !isNothing(variable);
export let navigator: Navigator = typeof nav !== 'undefined' ? nav : Nothing;
export let window: Window = typeof win !== 'undefined' ? win : Nothing;
