import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";
import { TimerOptions } from "../../types/timer/timerTypes";

const SecondSelectForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={TimerOptions.SECONDS}
        label={TimerOptions.SECONDS}
      >
        <InputNumber min={0} max={59} />
      </FormItem>
    </>
  );
};

export default SecondSelectForm;
