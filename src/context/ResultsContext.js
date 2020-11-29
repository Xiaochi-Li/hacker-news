import React, { useEffect, useReducer, createContext } from 'react';
import { BASE_URL } from '../constants/hackNewsAPI';

export const LOADING = 'LOADING';
export const RESPONSE_COMPLETE = 'RESPONSE_COMPLETE';
export const ERROR = 'ERROR';

export const ResultsContext = createContext();

const initialState = {
  hits: null,
  loading: true,
  error: null,
};

export const fetchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        hits: null,
        loading: true,
        error: null,
      };
    case RESPONSE_COMPLETE:
      return {
        hits: payload.hits,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        hits: null,
        loading: false,
        error: payload.error,
      };
    default:
      return { ...state };
  }
};

export const ResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    fetch(BASE_URL + 'search?query=foo&tags=story')
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: RESPONSE_COMPLETE, payload: { response } });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: { error } });
      });
  }, []);

  const value = { ...state };

  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
