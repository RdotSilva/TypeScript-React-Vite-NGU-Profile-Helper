import { useForm } from "react-hook-form";
import { Button, Checkbox, Flex, Form, Input, InputNumber, Select } from "antd";

import { FormItem } from "react-hook-form-antd";
import { DevTool } from "@hookform/devtools";
import {
  EnergyCapFieldNames,
  EnergyCapFieldPriorities,
  TimerOptions,
} from "../../types/energy/energyTypes";

const ExampleForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      CAPALLBT: true,
      CAPALLAT: true,
      CAPALLNGU: true,
      CAPBESTAUG: true,
      CAPWAN: true,
      CAPTM: true,
      HOURS: 0,
      MINUTES: 0,
      CAPWAN_PRIORITY: "0",
    },
  });

  return (
    <>
      <Form
        style={{ maxWidth: 600, backgroundColor: "white", padding: "20px" }}
        onFinish={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormItem
          control={control}
          name={TimerOptions.HOURS}
          label={TimerOptions.HOURS}
        >
          <InputNumber />
        </FormItem>
        <Flex gap="middle" align="start">
          <FormItem
            control={control}
            name={EnergyCapFieldPriorities.CAPWAN_PRIORITY}
            label={EnergyCapFieldPriorities.CAPWAN_PRIORITY}
          >
            <Checkbox />
          </FormItem>
          <FormItem
            control={control}
            name={EnergyCapFieldNames.CAPWAN}
            label={EnergyCapFieldNames.CAPWAN}
          >
            <Select />
          </FormItem>
        </Flex>

        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPTM}
          label={EnergyCapFieldNames.CAPTM}
        >
          <Checkbox />/
        </FormItem>
        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPALLNGU}
          label={EnergyCapFieldNames.CAPALLNGU}
        >
          <Checkbox />/
        </FormItem>

        {/* <FormItem control={control} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </FormItem> */}
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
