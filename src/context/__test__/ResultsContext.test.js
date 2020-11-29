import {
  fetchReducer,
  LOADING,
  RESPONSE_COMPLETE,
  ERROR,
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
    const action = { type: ERROR, payload: { error: 'mock error' } };
    expect(fetchReducer(mockState, action).error).toEqual('mock error');
  });
});
