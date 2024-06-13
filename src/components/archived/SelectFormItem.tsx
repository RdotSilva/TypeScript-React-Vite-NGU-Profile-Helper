import React from "react";
import { Select, Space, Typography } from "antd";
import type { SelectProps } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  EnergyCapFieldNames,
  EnergyFormValues,
  FormValues,
} from "../../types/energy/energyTypes";

const { Text } = Typography;

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
  name: keyof typeof EnergyCapFieldNames;
  control: Control<FormValues>;
  description: string;
}

const SelectFormItem = ({
  name,
  control,
  description,
}: SelectFormItemProps) => (
  <Space style={{ width: "100%" }} direction="vertical">
    <Controller
      render={({ field }) => (
        <Select
          {...field}
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="CAPNGU-X"
          onChange={field.onChange}
          options={options}
        />
      )}
      control={control}
      name={name}
    />
    <Text code>{description}</Text>
  </Space>
);

export default SelectFormItem;
