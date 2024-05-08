import React from "react";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  CapNguFieldNames,
  EnergyFormValues,
} from "../../types/energy/energyTypes";

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

interface SelectFormItemProps {
  name: CapNguFieldNames;
  control: Control<EnergyFormValues>;
}

const SelectFormItem = ({ name, control }: SelectFormItemProps) => (
  <Space style={{ width: "100%" }} direction="vertical">
    <Controller
      render={({ field }) => (
        <Select
          {...field}
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="CAPNGU-X"
          onChange={handleChange}
          options={options}
        />
      )}
      control={control}
      name={name}
    />
  </Space>
);

export default SelectFormItem;