import React from "react";

import { InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";
import { TimerOptions, TimerValues } from "../../types/energy/energyTypes";

interface TimeSelectFormProps {
  control: Control<TimerValues>;
  name: TimerOptions;
  defaultValue: number;
}

const TimeSelectForm = ({
  control,
  name,
  defaultValue,
}: TimeSelectFormProps) => (
  <>
    <Controller
      render={({ field }) => (
        <InputNumber
          min={0}
          max={72}
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

export default TimeSelectForm;
