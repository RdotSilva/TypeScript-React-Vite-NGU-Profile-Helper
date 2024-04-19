import { Button, Checkbox } from "antd";
import { useForm } from "react-hook-form";
import generateJsonObject from "../utils/generator";

const defaultValues = {
  CAPALLBT: true,
};

const CheckForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    const jsonObject = generateJsonObject(data);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkbox
        {...control.register("CAPALLBT")}
        defaultChecked={defaultValues.CAPALLBT}
      >
        CAPALLBT
      </Checkbox>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default CheckForm;
