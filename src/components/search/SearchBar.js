import React, { useContext } from 'react';
import { Input } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const SearchBar = () => {
  const { updateSearchKeywords } = useContext(ResultsContext);
  return (
    <Input
      placeholder="input search text"
      size="large"
      onChange={(e) => {
        updateSearchKeywords(e.target.value);
      }}
    />
  );
};

export default SearchBar;
