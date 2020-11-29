import React from 'react';
import { Input } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const SearchBar = () => {
  const { updateSearchKeywords } = React.useContext(ResultsContext);
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
