import { Select, Input, Button, Radio } from "antd";

import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  capAllBtSelect: "True",
};

const EnergyForm = () => {
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            fieldNames={{ label: "Test" }}
            options={[
              { value: "True", label: "True" },
              { value: "False", label: "False" },
            ]}
          />
        )}
        control={control}
        name="capAllBtSelect"
        defaultValue={"True"}
      />

      <Button type="primary" htmlType="submit">
        Submit
      </Button>

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
        name="capAllBtSelect"
        defaultValue={"True"}
      />
    </form>
  );
};

export default EnergyForm;
