import React from 'react';
import { render } from '@testing-library/react';
import NewsItem from '../NewsItem';

const testProps = {
  title: 'test title',
  description: 'test description',
  points: 100,
  num_comments: 200,
  url: 'https://www.test.com/',
  story_text: '<p>test story</p>',
  _tags: ['test tag 1', 'test tag 2'],
};

describe('<NewsItem/> spec', () => {
  it('renders NewsItem component', () => {
    const component = render(<NewsItem {...testProps} />);
    expect(component).toMatchSnapshot();
  });
});
