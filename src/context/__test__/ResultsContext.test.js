import {
  fetchReducer,
  LOADING,
  RESPONSE_COMPLETE,
  ERROR,
  UPDATE_KEYWORDS,
  UPDATE_CURRENT_PAGE,
} from '../ResultsContext';

import { mockState } from '../../utils/testHelper/mockState';
import { mockHits } from '../../utils/testHelper/mockHits';

describe('test fetchReducer', () => {
  it('should turn loading to true', () => {
    const action = { type: LOADING };
    expect(fetchReducer(mockState, action).loading).toBeTruthy();
  });

  it('should add hits to state', () => {
    const action = { type: RESPONSE_COMPLETE, payload: { hits: mockHits } };
    expect(fetchReducer(mockState, action).hits.length).toEqual(10);
  });

  it('should have error message', () => {
    const action = { type: ERROR, payload: { error: 'test error' } };
    expect(fetchReducer(mockState, action).error).toEqual('test error');
  });

  it('should update searchKeywords', () => {
    const action = {
      type: UPDATE_KEYWORDS,
      payload: { searchKeywords: 'test keywords' },
    };
    expect(fetchReducer(mockState, action).searchKeywords).toEqual(
      'test keywords'
    );
  });

  it('should update page', () => {
    const action = { type: UPDATE_CURRENT_PAGE, payload: { currentPage: 23 } };
    expect(fetchReducer(mockState, action).currentPage).toEqual(23);
  });
});
