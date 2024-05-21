import React from "react";

import { InputNumber } from "antd";
import { Control, Controller } from "react-hook-form";
import { EnergyFormValues, TimerOptions } from "../../types/energy/energyTypes";

interface TimeSelectFormProps {
  control: Control<EnergyFormValues>;
  name: TimerOptions;
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
