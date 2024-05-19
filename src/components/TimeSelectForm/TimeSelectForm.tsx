import React from "react";
// import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  EnergyCapFieldNames,
  EnergyFormValues,
} from "../../types/energy/energyTypes";

// const onChange: InputNumberProps["onChange"] = (value) => {
//   console.log("changed", value);
// };

interface TimeSelectFormProps {
  control: Control<EnergyFormValues>;
  name: EnergyCapFieldNames;
}

const TimeSelectForm = ({ control, name }: TimeSelectFormProps) => (
  <>
    <Controller
      render={({ field }) => (
        <InputNumber
          min={0}
          max={72}
          defaultValue={0}
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
