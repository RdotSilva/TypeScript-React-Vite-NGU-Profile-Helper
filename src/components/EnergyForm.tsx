import { Select, Input } from "antd";

import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  select: "",
  input: "",
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
            options={[
              { value: "True", label: "True" },
              { value: "False", label: "False" },
            ]}
          />
        )}
        control={control}
        name="select"
        defaultValue={"True"}
      />

      <button type="button" onClick={() => reset({ defaultValues })}>
        Reset
      </button>
      <input type="submit" />
    </form>
  );
};

export default EnergyForm;
