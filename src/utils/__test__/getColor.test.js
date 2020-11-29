import { getColor } from '../getColor';

describe('test getColor function', () => {
  it('shoud return gold for number 4', () => {
    expect(getColor(4)).toEqual('lime');
  });

  it('shoud return gold for number 24', () => {
    expect(getColor(24)).toEqual('lime');
  });
});
