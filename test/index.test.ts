import { document, exists, navigator, window } from '../src';

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

describe('navigator', () => {
  it('should navigator object exist', () => {
    expect(exists(navigator)).toBeTruthy();
  });
});
