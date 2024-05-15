import React from "react";
// import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

// const onChange: InputNumberProps["onChange"] = (value) => {
//   console.log("changed", value);
// };

const TimeSelectForm: React.FC = () => (
  <>
    <InputNumber
      min={1}
      max={72}
      defaultValue={1}
      onChange={onChange}
      addonAfter="Hours"
    />

    <InputNumber
      min={1}
      max={59}
      defaultValue={1}
      onChange={onChange}
      addonAfter="Minutes"
    />
  </>
);

export default TimeSelectForm;
