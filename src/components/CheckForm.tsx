import { Button, Checkbox } from "antd";
import { Controller, useForm } from "react-hook-form";
import generateJsonObject from "../utils/generator";

const defaultValues = {
  CAPALLBT: true,
};

const CheckForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(`onSubmit data: ${JSON.stringify(data)}`);
    const jsonObject = generateJsonObject(data);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <Checkbox {...field} defaultChecked={defaultValues.CAPALLBT}>
            CAPALLBT
          </Checkbox>
        )}
        control={control}
        name="CAPALLBT"
        defaultValue={true}
      />

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default CheckForm;
