import React, { useContext } from 'react';
import ResultsList from '../components/search/ResultsList';
import SearchBar from '../components/search/SearchBar';
import { Layout, Spin } from 'antd';
import { ResultsContext } from '../context/ResultsContext';

const contentStyles = { padding: '0 10%' };

const SearchResultPage = () => {
  const { loading } = useContext(ResultsContext);

  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <SearchBar />
      </Header>
      <Content style={contentStyles}>
        {loading ? <Spin size="large" /> : <ResultsList />}
      </Content>
    </Layout>
  );
};

export default SearchResultPage;
