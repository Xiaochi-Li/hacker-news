import React, {
  useEffect,
  useReducer,
  createContext,
  useCallback,
} from 'react';
import { getSearchUrl } from '../utils/getSearchUrl';
import { tags } from '../constance/searchConstance';

// TODO create action creators
export const LOADING = 'LOADING';
export const RESPONSE_COMPLETE = 'RESPONSE_COMPLETE';
export const ERROR = 'ERROR';
export const UPDAT_KEYWORDS = 'UPDAT_KEYWORDS';

export const ResultsContext = createContext();

const initialState = {
  searchKeywords: '',
  hits: [],
  loading: true,
  error: null,
};

export const fetchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        hits: null,
        loading: true,
        error: null,
      };
    case RESPONSE_COMPLETE:
      return {
        ...state,
        hits: payload.hits,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        hits: null,
        loading: false,
        error: payload.error,
      };
    case UPDAT_KEYWORDS:
      return {
        ...state,
        searchKeywords: payload.searchKeywords,
      };
    default:
      return { ...state };
  }
};

export const ResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { searchKeywords } = state;

  useEffect(() => {
    fetch(getSearchUrl(searchKeywords, 1, tags.story))
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: RESPONSE_COMPLETE,
          payload: { hits: response.hits },
        });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: { error } });
      });
  }, [searchKeywords]);

  const updateSearchKeywords = useCallback(
    (searchKeywords) => {
      dispatch({ type: UPDAT_KEYWORDS, payload: { searchKeywords } });
    },
    [dispatch]
  );

  const value = { ...state, updateSearchKeywords };
  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
