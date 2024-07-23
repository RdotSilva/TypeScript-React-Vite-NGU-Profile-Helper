import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";
import { TimerOptions } from "../../types/timer/timerTypes";

const MinuteSelectForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={TimerOptions.MINUTES}
        label={TimerOptions.MINUTES}
      >
        <InputNumber min={1} max={59} />
      </FormItem>
    </>
  );
};

export default MinuteSelectForm;
