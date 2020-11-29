import React, { useContext } from 'react';
import { Input } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const SearchBar = () => {
  const { updateSearchKeywords } = useContext(ResultsContext);
  return (
    <Input.Search
      placeholder="input search text"
      size="large"
      onSearch={(text) => {
        updateSearchKeywords(text);
      }}
      enterButton
    />
  );
};

export default SearchBar;
