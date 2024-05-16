import React from "react";
// import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { Controller } from "react-hook-form";

// const onChange: InputNumberProps["onChange"] = (value) => {
//   console.log("changed", value);
// };

const TimeSelectForm: React.FC = ({ control }) => (
  <>
    <Controller
      render={({ field }) => (
        <InputNumber
          min={1}
          max={72}
          defaultValue={1}
          onChange={field.onChange}
          addonAfter="Hours"
        />
      )}
      control={control}
      name="HourSelect"
    />
  </>
);

export default TimeSelectForm;
