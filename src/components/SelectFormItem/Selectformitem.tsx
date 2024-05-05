import React from "react";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 0; i < 9; i++) {
  options.push({
    label: `CAPNGU-${i}`,
    value: `CAPNGU-${i}`,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const SelectFormItem: React.FC = () => (
  <Space style={{ width: "100%" }} direction="vertical">
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="CAPNGU-X"
      defaultValue={[]}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default SelectFormItem;
