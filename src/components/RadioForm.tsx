import { Button, Radio } from "antd";
import { useForm, Controller } from "react-hook-form";
import generateJsonObject from "../utils/generator";

const defaultValues = {
  CAPALLBT: "True",
};

const RadioForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data: { CAPALLBT: string }) => {
    const jsonObject = generateJsonObject(data.CAPALLBT);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <Radio.Group
            {...field}
            options={[
              { value: "True", label: "True" },
              { value: "False", label: "False" },
            ]}
          />
        )}
        control={control}
        name="CAPALLBT"
        defaultValue={"True"}
      />

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default RadioForm;
