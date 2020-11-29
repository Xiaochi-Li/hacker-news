export const BASE_URL = 'https://hn.algolia.com/api/v1/';
export const SEARCH_ENDPOINT = 'search';

export const getSearchUrl = (input, page, tags) => {
  const pageQuery = page ? `page=${page - 1}` : '';
  const queryInput = input ? input : '';
  const queryTage = tags ? `tags=${tags}` : '';
  return `${BASE_URL}${SEARCH_ENDPOINT}?query=${queryInput}&${queryTage}&${pageQuery}`;
};
