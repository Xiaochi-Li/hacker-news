import {
  fetchReducer,
  LOADING,
  RESPONSE_COMPLETE,
  ERROR,
} from '../ResultsContext';

const state = {
  hits: null,
  loading: false,
  error: null,
};

describe('test fetchReducer', () => {
  it('has correct output for LOADING action', () => {
    const action = { type: LOADING };
    const ouput = fetchReducer(state, action);
    expect(ouput.loading).toBeTruthy();
  });

  it('has correct output for RESPONSE_COMPLETE action', () => {
    const action = { type: RESPONSE_COMPLETE, payload: { hits: {} } };
    const ouput = fetchReducer(state, action);
    expect(ouput.loading).toBeTruthy();
  });
});
