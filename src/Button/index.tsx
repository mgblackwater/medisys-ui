import React, { ReactChild, ReactNode } from 'react';
import { Button, Select } from 'antd';

export default ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Button>{children}</Button>

      <Select>
        <Select.Option value="jack">Test123</Select.Option>
      </Select>
    </div>
  );
};
