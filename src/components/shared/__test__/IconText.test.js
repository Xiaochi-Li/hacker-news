import React from 'react';
import { render } from '@testing-library/react';
import { StarTwoTone } from '@ant-design/icons';
import IconText from '../IconText';

const testProps = { text: 'test', icon: StarTwoTone };

describe('<IconText/> spec', () => {
  it('renders IconText component', () => {
    const component = render(<IconText {...testProps} />);
    expect(component).toMatchSnapshot();
  });
});
