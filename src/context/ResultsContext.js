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
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const ResultsContext = createContext();

const initialState = {
  searchKeywords: '',
  hits: [],
  loading: true,
  error: null,
  page: 1,
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
    case UPDATE_KEYWORDS:
      return {
        ...state,
        searchKeywords: payload.searchKeywords,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: payload.page,
      };
    default:
      return { ...state };
  }
};

export const ResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { searchKeywords, page } = state;

  useEffect(() => {
    fetch(getSearchUrl(searchKeywords, page, tags.story))
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
  }, [searchKeywords, page]);

  const updateSearchKeywords = useCallback(
    (searchKeywords) => {
      dispatch({ type: UPDATE_KEYWORDS, payload: { searchKeywords } });
    },
    [dispatch]
  );

  const updatePage = useCallback(
    (page) => {
      dispatch({
        type: UPDATE_PAGE,
        payload: { page: page },
      });
    },
    [dispatch]
  );

  const value = { ...state, updateSearchKeywords, updatePage };
  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
