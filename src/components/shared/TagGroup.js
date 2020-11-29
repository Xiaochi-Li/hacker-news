import React from 'react';
import getColor from '../../utils/getColor';
import { Tag } from 'antd';

const TagGroup = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag color={getColor(index)} key={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagGroup;
