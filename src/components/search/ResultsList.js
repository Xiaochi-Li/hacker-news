import React from 'react';
import NewsItem from '../shared/NewsItem';
import { List } from 'antd';
import { ResultsContext } from '../../context/ResultsContext';

const ResultsList = () => {
  const { hits } = React.useContext(ResultsContext);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 5,
      }}
      dataSource={hits}
      renderItem={(item) => <NewsItem {...item} />}
    />
  );
};

export default ResultsList;
