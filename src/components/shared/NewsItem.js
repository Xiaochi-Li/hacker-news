import React from 'react';
import IconText from './IconText';
import TagGroup from './TagGroup';
import { List, Typography } from 'antd';
import { StarTwoTone, MessageTwoTone } from '@ant-design/icons';
import { htmlToText } from 'html-to-text';

const NewsItem = ({
  title,
  description,
  points,
  num_comments,
  url,
  story_text,
  _tags,
}) => {
  return (
    <List.Item
      key={title}
      actions={[
        <IconText text={points} icon={StarTwoTone} key="star-two-tone-icon" />,
        <IconText
          text={num_comments}
          icon={MessageTwoTone}
          key="message-two-tone-icon"
        />,
        <TagGroup tags={_tags} key="tag-group" />,
      ]}
    >
      <List.Item.Meta
        title={
          <a href={url} rel="noreferrer" target="_blank">
            {title}
          </a>
        }
        description={description}
      />
      <Typography.Paragraph
        ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}
      >
        {htmlToText(story_text)}
      </Typography.Paragraph>
    </List.Item>
  );
};

export default NewsItem;
