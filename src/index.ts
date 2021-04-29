import { Nothing, isNothing } from 'nothing-mock';

const win = global.window;
const doc = global.document;
const nav = global.navigator;

export const document: Document = typeof doc !== 'undefined' ? doc : Nothing;
export const exists = (variable: any) => !isNothing(variable);
export const navigator: Navigator = typeof nav !== 'undefined' ? nav : Nothing;
export const window: Window = typeof win !== 'undefined' ? win : Nothing;
