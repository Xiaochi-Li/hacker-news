import React from 'react';
import ResultsList from '../components/search/ResultsList';
import { Layout } from 'antd';

const contentStyles = { padding: '0 10%' };

const SearchResultPage = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Content style={contentStyles}>
        <ResultsList />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default SearchResultPage;
