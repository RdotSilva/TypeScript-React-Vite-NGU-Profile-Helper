import { useFormContext } from "react-hook-form";
import { InputNumber } from "antd";
import { FormItem } from "react-hook-form-antd";

interface TimeSelectFormProps {
  name: string;
  label: string;
  min: number;
  max: number;
}

const TimeSelectForm = ({ name, label, min, max }: TimeSelectFormProps) => {
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
