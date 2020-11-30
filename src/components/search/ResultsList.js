import React, { useContext } from 'react';
import NewsItem from '../shared/NewsItem';
import { List } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const ResultsList = () => {
  const { hits, hitsTotal, updatePage, currentPage } = useContext(
    ResultsContext
  );
  const paginationConfig = {
    pageSize: 20,
    position: 'both',
    total: hitsTotal,
    current: currentPage,
    onChange: (newCurrentPage) => {
      updatePage(newCurrentPage);
    },
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={paginationConfig}
      dataSource={hits}
      renderItem={(item) => <NewsItem {...item} />}
    />
  );
};

export default ResultsList;
