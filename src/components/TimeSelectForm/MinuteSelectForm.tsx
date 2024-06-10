import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";
import { TimerOptions } from "../../types/energy/energyTypes";

const MinuteSelectForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={TimerOptions.MINUTES}
        label={TimerOptions.MINUTES}
      >
        <InputNumber />
      </FormItem>
    </>
  );
};

export default MinuteSelectForm;
