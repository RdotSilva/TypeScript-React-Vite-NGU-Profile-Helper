import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";

const TimeSelectForm = ({ name, label, min, max }) => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem control={control} name={name} label={label}>
        <InputNumber min={min} max={max} />
      </FormItem>
    </>
  );
};

export default TimeSelectForm;
