import { Button, Radio } from "antd";

import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  CAPALLBT: "True",
};

const RadioForm = () => {
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data);

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
