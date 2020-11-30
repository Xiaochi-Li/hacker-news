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
export const UPDATE_KEYWORDS = 'UPDAT_KEYWORDS';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export const ResultsContext = createContext();

const initialState = {
  searchKeywords: '',
  hits: [],
  loading: true,
  error: null,
  currentPage: 1,
  hitsTotal: 1000,
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
        ...payload,
        loading: false,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        hits: null,
        loading: false,
        error: payload.error,
      };
    case UPDATE_KEYWORDS:
      return {
        ...state,
        searchKeywords: payload.searchKeywords,
      };
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage,
      };
    default:
      return { ...state };
  }
};

export const ResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { searchKeywords, currentPage } = state;

  useEffect(() => {
    dispatch({ type: LOADING });
    fetch(getSearchUrl(searchKeywords, currentPage, tags.story))
      .then((response) => response.json())
      .then((response) => {
        const { hits, hitsPerPage, nbPages } = response;
        dispatch({
          type: RESPONSE_COMPLETE,
          payload: { hits, hitsTotal: hitsPerPage * nbPages },
        });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: { error } });
      });
  }, [searchKeywords, currentPage]);

  const updateSearchKeywords = useCallback(
    (searchKeywords) => {
      dispatch({ type: UPDATE_KEYWORDS, payload: { searchKeywords } });
    },
    [dispatch]
  );

  const updatePage = useCallback(
    (currentPage) => {
      dispatch({
        type: UPDATE_CURRENT_PAGE,
        payload: { currentPage: currentPage },
      });
    },
    [dispatch]
  );

  const value = { ...state, updateSearchKeywords, updatePage };
  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
