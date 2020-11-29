import React, { useContext } from 'react';
import NewsItem from '../shared/NewsItem';
import { List } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const ResultsList = () => {
  const { hits, hitsTotal, updatePage, page } = useContext(ResultsContext);
  const paginationConfig = {
    pageSize: 20,
    position: 'both',
    total: hitsTotal,
    current: page,
    onChange: (newpPage) => {
      updatePage(newpPage);
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
