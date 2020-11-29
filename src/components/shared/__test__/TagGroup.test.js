import React from 'react';
import { render } from '@testing-library/react';
import TagGroup from '../TagGroup';

const testProps = {
  tags: ['test tag 1', 'test tag 2'],
};

describe('test TagGroup', () => {
  it('renders TagGroup component', () => {
    const component = render(<TagGroup {...testProps} />);
    expect(component).toMatchSnapshot();
  });
});
