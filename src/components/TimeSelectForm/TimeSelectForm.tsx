import React from "react";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

const TimeSelectForm: React.FC = () => (
  <InputNumber
    min={1}
    max={72}
    defaultValue={0}
    onChange={onChange}
    addonAfter="Hours"
  />
);

export default TimeSelectForm;
