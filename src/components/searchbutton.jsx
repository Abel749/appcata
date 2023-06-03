import React from 'react';
import { useRouter } from 'next/router';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';

const SearchButton = () => (
  
  <Space direction="vertical">
    <Space wrap>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
    </Space>  
  </Space>
);

export default SearchButton;
