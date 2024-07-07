import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";
import { TimerOptions } from "../../types/energy/energyTypes";

const SecondSelectForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={TimerOptions.MINUTES}
        label={TimerOptions.MINUTES}
      >
        <InputNumber min={0} max={59} />
      </FormItem>
    </>
  );
};

export default SecondSelectForm;
