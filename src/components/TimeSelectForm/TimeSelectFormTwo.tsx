import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";

import { FormItem } from "react-hook-form-antd";

import { TimerOptions } from "../../types/energy/energyTypes";

const TimeSelectFormTwo = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={TimerOptions.HOURS}
        label={TimerOptions.HOURS}
      >
        <InputNumber />
      </FormItem>
    </>
  );
};

export default TimeSelectFormTwo;
