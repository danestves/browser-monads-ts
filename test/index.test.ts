import { document, exists, window } from '../src';

describe('window', () => {
  it('should window object exist', () => {
    expect(exists(window)).toBeTruthy();
  });
});

describe('document', () => {
  it('should document object exist', () => {
    expect(exists(document)).toBeTruthy();
  });
});
