import { Nothing, isNothing } from 'nothing-mock';

const win = global.window;
const doc = global.document;

export const window: Window = typeof win !== 'undefined' ? win : Nothing;
export const document: Document = typeof doc !== 'undefined' ? doc : Nothing;
export const exists = (variable: any) => !isNothing(variable);
