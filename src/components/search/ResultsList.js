import React from 'react';
import NewsItem from '../shared/NewsItem';
import { List } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const ResultsList = () => {
  const { hits, hitsTotal, updatePage } = React.useContext(ResultsContext);
  const paginationConfig = {
    pageSize: 20,
    position: 'both',
    total: hitsTotal,
    onChange: (page) => {
      updatePage(page);
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
