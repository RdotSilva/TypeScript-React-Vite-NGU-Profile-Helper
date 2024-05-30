import React from "react";

import { InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";
import { FormValues, TimerOptions } from "../../types/energy/energyTypes";

interface TimeSelectFormProps {
  control: Control<FormValues>;
  name: TimerOptions;
  defaultValue: number;
}

const PrioritySelectItem = ({
  control,
  name,
  defaultValue,
}: TimeSelectFormProps) => (
  <>
    <Controller
      render={({ field }) => (
        <InputNumber
          min={0}
          max={7}
          defaultValue={defaultValue}
          onChange={field.onChange}
          addonAfter={name}
        />
      )}
      control={control}
      name={name}
    />
  </>
);

export default PrioritySelectItem;
