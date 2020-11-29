import { getSearchUrl } from '../getSearchUrl';
import { tags } from '../../constance/searchConstance';

describe('test getSearchUrl function', () => {
  it('should return default Url', () => {
    expect(getSearchUrl(undefined, undefined, undefined)).toEqual(
      'https://hn.algolia.com/api/v1/search?query=&&'
    );
  });

  it('should return Url for new keyword', () => {
    expect(getSearchUrl('apple', 12, tags.story)).toEqual(
      'https://hn.algolia.com/api/v1/search?query=apple&tags=story&page=11'
    );
  });
});
