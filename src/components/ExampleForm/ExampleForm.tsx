import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";

import { FormItem } from "react-hook-form-antd";
import { DevTool } from "@hookform/devtools";
import { EnergyCapFieldNames } from "../../types/energy/energyTypes";

const ExampleForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { CAPWAN: false, password: "", remember: true },
  });

  return (
    <>
      <Form
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPWAN}
          label={EnergyCapFieldNames.CAPWAN}
        >
          <Checkbox />
        </FormItem>
        <FormItem control={control} name="password" label="Password">
          <Input.Password />
        </FormItem>
        <FormItem control={control} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </FormItem>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <DevTool control={control} />
    </>
  );
};

export default ExampleForm;