import React from "react";
// import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";

// const onChange: InputNumberProps["onChange"] = (value) => {
//   console.log("changed", value);
// };

interface TimeSelectFormProps {
  control: Control<any>;
  name: string;
}

const TimeSelectForm: React.FC = ({ control, name }: TimeSelectFormProps) => (
  <>
    <Controller
      render={({ field }) => (
        <InputNumber
          min={1}
          max={72}
          defaultValue={1}
          onChange={field.onChange}
          addonAfter={name}
        />
      )}
      control={control}
      name={name}
    />
  </>
);

export default TimeSelectForm;
